/* eslint-disable max-len */
/* eslint-disable no-useless-catch */
/* eslint-disable require-jsdoc */

const fs = require('fs');

class MarkDowner {
  constructor() {
    this.result = '';
  }

  set addH1(text) {
    this.result += `# ${text}`;
    this.result += '\n';
  }

  set addH2(text) {
    this.result += `## ${text}`;
    this.result += '\n';
  }

  set addH3(text) {
    this.result += `### ${text}`;
    this.result += '\n';
  }

  set addH4(text) {
    this.result += `#### ${text}`;
    this.result += '\n';
  }

  set addH5(text) {
    this.result += `##### ${text}`;
    this.result += '\n';
  }

  set addH6(text) {
    this.result += `###### ${text}`;
    this.result += '\n';
  }

  set addRaw(md) {
    this.result += md;
    this.result += '\n\n';
  }

  set addTable(options) {
    this.result += '|';
    options.headers.forEach((h) => {
      this.result += `${h}|`;
    });
    this.result += '\n|';
    options.headers.forEach(() => {
      this.result += '-|';
    });
    options.data.forEach((d) => {
      this.result += '\n|';
      d.forEach((ds) => {
        this.result += `${ds}|`;
      });
    });
    this.result += '\n';
  }

  set addLine(n) {
    for (let i = 0; i < n; i++) {
      this.result += '---\n';
    }
  }

  set addCode(code) {
    this.result += `    ${code}`;
    this.result += '\n';
  }

  set addEmptyLine(line = 1) {
    for (let i = 0; i < line; i++) {
      this.result += '\n';
    }
  }

  save(location) {
    fs.writeFileSync(location, this.result, { encoding: 'utf8' });
  }
}

module.exports = MarkDowner;
