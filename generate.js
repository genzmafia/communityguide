const fs = require("fs");
const showdown = require("./showdown.js");

const contentPlaceholder = "__CONTENT__";

const options = {
  tables: true,
  ghCompatibleHeaderId: true,
  requireSpaceBeforeHeadingText: true,
  simplifiedAutoLink: true,
};
const converter = new showdown.Converter(options);

const template = fs.readFileSync("template.html", "utf8");
const markdown = fs.readFileSync("guide.md", "utf8");
const html = converter.makeHtml(markdown);
const result = template.replace(contentPlaceholder, html);
fs.writeFileSync("index.html", result);
