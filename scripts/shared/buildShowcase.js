import fs from "fs";
import path from "path";
import appRoot from "app-root-path";
import { logger } from "../utils/index.js";

const LOGGER = logger("buildShowcase");

// Map file extensions to fenced-code-block language identifiers.
// .galaxy is treated as C++ per project convention.
const EXT_TO_LANG = {
  ".galaxy": "cpp",
  ".xml": "xml",
  ".json": "json",
  ".js": "javascript",
  ".mjs": "javascript",
  ".cjs": "javascript",
  ".ts": "typescript",
  ".tsx": "tsx",
  ".jsx": "jsx",
  ".md": "markdown",
  ".txt": "text",
  ".yaml": "yaml",
  ".yml": "yaml",
  ".toml": "toml",
  ".ini": "ini",
  ".sh": "bash",
  ".bat": "batch",
  ".ps1": "powershell",
  ".py": "python",
  ".lua": "lua",
  ".css": "css",
  ".html": "html",
  ".htm": "html",
};

function getLang(filename) {
  const ext = path.extname(filename).toLowerCase();
  return EXT_TO_LANG[ext] ?? "";
}

// Generate a GitHub-flavoured Markdown heading anchor from a title string.
function toAnchor(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")   // strip punctuation except hyphens
    .trim()
    .replace(/[\s]+/g, "-");    // spaces → hyphens
}

const buildShowcase = () => {
  const showcaseJsonPath = path.join(appRoot.path, "docs/gen/showcase.json");
  const showcaseDirPath = path.join(appRoot.path, "docs/gen/showcase");
  const outputPath = path.join(appRoot.path, "docs/showcase/index.md");

  // Clear existing showcase folder
  const showcaseOutputDir = path.dirname(outputPath);
  if (fs.existsSync(showcaseOutputDir)) {
    fs.rmSync(showcaseOutputDir, { recursive: true, force: true });
    LOGGER.info(`Cleared existing showcase output directory: ${showcaseOutputDir}`);
  }
  fs.mkdirSync(showcaseOutputDir, { recursive: true });

  // --- Read page-level metadata ---
  if (!fs.existsSync(showcaseJsonPath)) {
    LOGGER.error(`Unable to find showcase.json: ${showcaseJsonPath}`);
    process.exit(1);
  }

  const pageData = JSON.parse(
    fs.readFileSync(showcaseJsonPath, { encoding: "utf8" }),
  );

  // --- Collect showcase entries ---
  if (!fs.existsSync(showcaseDirPath)) {
    LOGGER.error(`Showcase directory not found: ${showcaseDirPath}`);
    process.exit(1);
  }

  const entries = fs
    .readdirSync(showcaseDirPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const entryDir = path.join(showcaseDirPath, d.name);
      const metaPath = path.join(entryDir, "metadata.json");

      if (!fs.existsSync(metaPath)) {
        LOGGER.warn(`Skipping "${d.name}" – metadata.json not found`);
        return null;
      }

      const meta = JSON.parse(
        fs.readFileSync(metaPath, { encoding: "utf8" }),
      );

      // Collect community files
      const filesDir = path.join(entryDir, "files");
      const files = [];
      if (fs.existsSync(filesDir)) {
        fs.readdirSync(filesDir, { withFileTypes: true })
          .filter((f) => f.isFile())
          .forEach((f) => {
            const content = fs.readFileSync(path.join(filesDir, f.name), {
              encoding: "utf8",
            });
            files.push({ name: f.name, content });
          });
      }

      return { folderName: d.name, meta, files };
    })
    .filter(Boolean);

  // --- Build markdown ---
  let md = `---
title: 🖼 Community Showcases
nav_order: 6
last_modified_date: ${new Date().toGMTString()}
---

`;

  md += `# 🖼 ${pageData.title}\n`;
  md += `{: .no_toc }\n\n`
  md += `${pageData.description}\n\n`;
  md += `- Table of Contents\n`
  md += `{:toc}\n`

  if (entries.length === 0) {
    md += "*No showcase entries found.*\n";
  }

  entries.forEach(({ folderName, meta, files }, i) => {

    // Each entry create a new markdown file

    let entryMd = "";

    entryMd += `---\n`;
    
    entryMd += `title: 🎞 ${meta.title ?? "Untitled"}\n`;
    entryMd += `nav_order: ${i}\n`;
    entryMd += `last_modified_date: ${new Date().toGMTString()}\n`;
    entryMd += `parent: 🖼 Community Showcases\n`;
    entryMd += `---\n\n`;

    const {
      title,
      description,
      image,
      video,
      author,
      authorComment,
      url,
    } = meta;

    // Section heading
    entryMd += `---\n\n`;
    entryMd += `## 🖼 ${title ?? "Untitled"}\n\n`;

    // Author line
    if (author) {
      if (url) {
        entryMd += `**Author:** [${author}](${url})\n\n`;
      } else {
        entryMd += `**Author:** ${author}\n\n`;
      }
    }

    // Description
    if (description) {
      entryMd += `${description}\n\n`;
    }

    // Author comment (quoted)
    if (authorComment) {
      entryMd += `> ${authorComment}\n\n`;
    }

    // Media — video takes priority over image
    if (video) {
      entryMd += `<video src="${video}" controls></video>\n\n`;
    } else if (image) {
      entryMd += `![${title ?? ""}](${image})\n\n`;
    }

    // Files
    if (files.length > 0) {
      // md += `### Files\n\n`;
      files.forEach(({ name, content }) => {
        const lang = getLang(name);
        // md += `<details>\n`;
        // md += `<summary><code>${name}</code></summary>\n\n`;
        entryMd += `### File: \`${name}\`\n`
        entryMd += `\`\`\`${lang}\n`;
        entryMd += `${content}`;
        // Ensure there is a trailing newline before the closing fence
        if (!content.endsWith("\n")) entryMd += "\n";
        entryMd += `\`\`\`\n\n`;
        // md += `</details>\n\n`;
      });
    }

    // Save individual entry markdown file
    const filePath = path.join(appRoot.path, "docs/showcase/" + folderName + ".md");
    fs.writeFileSync(filePath, entryMd, { encoding: "utf8" });
    LOGGER.info(`Saved entry "${title}" to ${filePath}`);
  });


  fs.writeFileSync(outputPath, md, { encoding: "utf8" });
  LOGGER.info(`Saved showcase doc to ${outputPath}`);
};

export default buildShowcase;
