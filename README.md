# KLJ Merkem

Astro website at https://kljmerkem.be, hosted on GitHub Pages. All published site content and images are fetched from Sanity at build time. Visitors receive static HTML; no CMS token or frontend framework is shipped to the browser.

## Edit content

Open https://kljmerkem-website.sanity.studio/ and sign in with your existing Sanity account.

- **Home**: introduction, membership information and homepage photos.
- **Activiteiten / Evenementen / Bestuur**: the existing prepared documents, including ordering, images and contact details.
- **Evenementen → Jaarlijks moment**: enter an annual schedule, such as “Elke eerste zaterdag van april”. These events remain visible in the annual section. The optional “Datum volgende editie” appears alongside it only while that date is current or upcoming; no future dates are guessed.
- **Home → carouselImages**: photos rotate automatically every five seconds without overlays or manual controls. Rotation stops while the browser tab is hidden and resumes when visible.
- **Geschiedenis → content**: each Heading 2 starts a timeline milestone. Use “1935 — Oprichting BJB” for a separate year badge; following paragraphs belong to that milestone.
- **Geschiedenis**: rich-text history, migrated from the previous website.
- **Fotogalerij**: reorder, add or remove gallery images and edit their alternative text.
- **Website instellingen**: logo, homepage headline, navigation labels, page headings, descriptions, contact details, social links and interface labels.

Project: `z10tsa4x`. Dataset: `production`. Managed workspace: `website`.
The original Studio remains available and edits the same documents. Use the new Studio for the added gallery and settings types. The empty project `9uexmhie` is unused.

Publish changes in Sanity to make them eligible for the next build. Drafts never appear on the public site. Do not change the six navigation paths: these correspond to Astro routes. Keep the singleton documents `website-settings`, `website-gallery` and `website-history` rather than creating duplicates. `sanity/schema.declaration.txt` records the managed schema; schema changes must be deployed to the `website` workspace and the managed Studio redeployed with the Sanity plugin.

## Local development

Use Node.js 24 (minimum 22.12).

```sh
npm ci
npm run dev
npm run verify
npm run preview
```

`verify` runs Astro/TypeScript diagnostics, tests for link safety and Belgian event dates, builds against published Sanity content, and checks generated routes, local links, metadata, 404, sitemap and custom domain. No access token is required for this public dataset. Optional project overrides are documented in `.env.example`.

## Deployment and content updates

`.github/workflows/deploy.yml` builds and deploys with GitHub Actions. GitHub Pages must use **GitHub Actions** as its source and retain `kljmerkem.be` as the custom domain.

- Push to `main`: validates and deploys the website.
- Sanity content: checked hourly at minute 17. Only changed published content or a new Belgian calendar day triggers a rebuild. GitHub may delay scheduled runs.
- Immediate update: GitHub repository → Actions → Deploy Astro to GitHub Pages → Run workflow.
- Optional external integration: authenticated `repository_dispatch` with event type `sanity-publish` also triggers deployment. No webhook credential is embedded in this repository.

Build failures preserve the existing deployment. Event dates are formatted and grouped in Europe/Brussels. Events without dates have their own section; elapsed events appear under past events. Scheduled daily date changes keep that grouping current.

## Structure

- `src/pages`: six original routes, a real 404 page and generated sitemap.
- `src/lib/content.ts`: published-only GROQ queries, types and Sanity image URLs.
- `src/components`, `src/layouts`, `src/styles`: shared Astro templates and responsive styles.
- `static`: CNAME, robots and no-Jekyll marker.
- `legacy`: preserved CRA source and public files, including the pre-existing local HTML formatting change; excluded from the new build and deployment.

The browser JavaScript handles the mobile menu and accessible gallery dialog. Gallery images remain usable as ordinary links without JavaScript. Images come from Sanity's CDN with responsive sizes. The original Google Analytics measurement ID is retained in Sanity settings and can be removed there.

## References

[Astro GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/)
[Sanity JavaScript client](https://www.sanity.io/docs/js-client)
