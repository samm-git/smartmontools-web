# smartmontools website

Static website for the [smartmontools](https://www.smartmontools.org/) project,
built with [Docusaurus](https://docusaurus.io/) and published with GitHub Pages.

This is a work-in-progress replacement for the former Trac site.  The content
was migrated from the smartmontools Trac wiki; the on-line manual pages are
generated from the
[smartmontools source repository](https://github.com/smartmontools/smartmontools)
at build time.

## Layout

```
docusaurus.config.js     # Docusaurus configuration
sidebars.js              # documentation sidebar
docs/                    # Markdown content (one page per wiki page)
  man/                   # generated man pages (see below)
  img/                   # images
src/pages/index.js       # hand-written landing page
src/css/custom.css       # theme tweaks
static/                  # logo, favicon, .nojekyll
.github/workflows/       # GitHub Pages build & deploy
overrides/               # hand-cleaned pages re-applied on regeneration
```

## Building locally

```sh
npm install
npm start                # dev server on http://localhost:3000
npm run build            # output in build/
```

The on-line manual pages (`docs/man/smartctl.md`, `smartd.md`,
`smartd.conf.md`, `update-smart-drivedb.md`) are generated automatically by the
Pages workflow from the upstream `main` branch and are intentionally not
committed.  For a full local build, generate them first.

## Content migration

`docs/*.md` was produced from a `trac-admin wiki dump` by the `trac2gh`
converter (the same tool used to migrate the Trac tickets to GitHub issues) and
is committed here so the site no longer depends on Trac.  A few pages are kept
by hand in `overrides/` and re-applied after regeneration.

## Notes

- `.md` files are parsed as CommonMark (not MDX) so the migrated raw HTML keeps
  working.
- Remaining build warnings about broken anchors/markdown links refer to links
  that were already broken in the original Trac wiki.
