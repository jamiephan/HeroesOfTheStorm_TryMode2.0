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
  const outputPath = path.join(appRoot.path, "docs/showcase.md");

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
  let md = "";

  // Back link + title
  md += `[◁ Back to Home](index.md)\n\n`;
  md += `# ${pageData.title}\n\n`;
  md += `<sup>*(Generated from [showcase.json](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/blob/master/docs/gen/showcase.json) at ${new Date().toGMTString()})*</sup>\n\n`;
  md += `${pageData.description}\n\n`;

  // --- Table of Contents ---
  if (entries.length > 0) {
    md += `## Table of Contents\n\n`;
    entries.forEach(({ meta }) => {
      const title = meta.title ?? "Untitled";
      md += `- [${title}](#${toAnchor(title)})\n`;
    });
    md += "\n";
  }

  if (entries.length === 0) {
    md += "*No showcase entries found.*\n";
  }

  entries.forEach(({ meta, files }) => {
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
    md += `---\n\n`;
    md += `## ${title ?? "Untitled"}\n\n`;

    // Author line
    if (author) {
      if (url) {
        md += `**Author:** [${author}](${url})\n\n`;
      } else {
        md += `**Author:** ${author}\n\n`;
      }
    }

    // Description
    if (description) {
      md += `${description}\n\n`;
    }

    // Author comment (quoted)
    if (authorComment) {
      md += `> ${authorComment}\n\n`;
    }

    // Media — video takes priority over image
    if (video) {
      md += `<video src="${video}" controls></video>\n\n`;
    } else if (image) {
      md += `![${title ?? ""}](${image})\n\n`;
    }

    // Files
    if (files.length > 0) {
      md += `### Relative Files\n\n`;
      files.forEach(({ name, content }) => {
        const lang = getLang(name);
        md += `<details>\n`;
        md += `<summary><code>${name}</code></summary>\n\n`;
        md += `\`\`\`${lang}\n`;
        md += `${content}`;
        // Ensure there is a trailing newline before the closing fence
        if (!content.endsWith("\n")) md += "\n";
        md += `\`\`\`\n\n`;
        md += `</details>\n\n`;
      });
    }
  });

  // Final trailing separator
  md += `---\n`;

  fs.writeFileSync(outputPath, md, { encoding: "utf8" });
  LOGGER.info(`Saved showcase doc to ${outputPath}`);
};

export default buildShowcase;
