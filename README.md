# GZM unofficial community guide repo
Guide on various topics for the GZM discord server. Contributions welcome.

## Structure
tl;dr: Edit `guide.md` and PR. Contbuild will update the web page automatically.

To see the result locally, run either `make` or  `node generate.js`. View `index.html` for the result. While hacky, it's small, simple, and there are no dependencies other than `node` and the included `showdown`.

- `guide.md`: markdown for the actual guide.
- `template.html`: the HTML template the rendered markdown gets inserted in.
- `generate.js`: script to regenerate `index.html` from the markdown file. Contbuild will automatically run it, but you can run locally too to view the result.
- `index.html`: the actual HTML page.
- `style.css`: the stylesheet used for the page.
- `Makefile, README.md`: self-explanatory.
- `showdown.js`: JS dependency for markdown-to-html.
