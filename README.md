# Alejandro Ricoveri González

Photography portfolio, built with [Astro](https://astro.build) as a fully static site and served by GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Content

- Identity and copy: [src/site.ts](src/site.ts). Anything marked `TODO` is a placeholder.
- Photos: drop the JPEG into `src/photos/` and add an entry to [src/data/photos.ts](src/data/photos.ts). Order in that file is the gallery order. Optional `title`, `place`, `year` and `series` (ids from the `series` list) are shown in captions and drive the filter buttons, which appear once at least one photo is tagged.
- Responsive sizes (webp, 480–2400px) are generated at build time, so originals can be left at full size.

## Deploy

Pushes to `main` run [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
One-time setting: repository **Settings › Pages › Source = GitHub Actions**.

## License

- Code is licensed under the [zlib/libpng license](LICENSE).
- All images are © Alejandro Ricoveri González. All rights reserved.
