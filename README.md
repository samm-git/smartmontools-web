# smartmontools website

Static website for the [smartmontools](https://www.smartmontools.org/) project,
built with [Zensical](https://zensical.org/) and published with GitHub Pages.

This is a work-in-progress replacement for the former Trac site.  The bulk of
the content was migrated from the smartmontools Trac wiki; the on-line manual
pages are generated from the
[smartmontools source repository](https://github.com/smartmontools/smartmontools)
at build time.

## Layout

```
mkdocs.yml               # site configuration (read by Zensical)
requirements.txt         # build dependency (zensical)
docs/                    # Markdown content
  index.md               # hand-written landing page
  about.md               # migrated former Trac front page
  *.md                   # migrated wiki pages
  man/                   # generated man pages (see below)
  assets/                # images
.github/workflows/       # GitHub Pages build & deploy
```

## Building locally

```sh
pip install -r requirements.txt
zensical serve        # preview at http://localhost:8000
zensical build        # output in site/
```

The on-line manual pages (`docs/man/smartctl.md`, `smartd.md`,
`smartd.conf.md`, `update-smart-drivedb.md`) are generated automatically by the
Pages workflow from the upstream `main` branch and are intentionally not
committed.  For a full local build, generate them first or the corresponding
navigation entries will be missing.

## Content migration

The Markdown under `docs/` was produced from a `trac-admin wiki dump` by the
`trac2gh` converter (the same tool used to migrate the Trac tickets to GitHub
issues).  It is committed here so the site no longer depends on Trac.

## Notes

- Theme variant is `classic`, which preserves the Material for MkDocs
  appearance.  Material for MkDocs itself is end-of-life on 2026-11-05.
- Remaining build notes about "anchor does not exist" refer to links that were
  already broken in the original Trac wiki.
