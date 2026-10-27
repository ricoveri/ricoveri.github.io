import type { ImageMetadata } from 'astro';

// Series shown as filters. A series only appears once a photo is tagged with it.
export const series = [
  { id: 'portraits', label: 'Portraits' },
  { id: 'street', label: 'Street' },
];

export interface PhotoEntry {
  file: string; // file name in src/photos
  title?: string;
  place?: string;
  year?: string;
  series?: string[]; // ids from `series`
}

// Order here is the order in the gallery.
const entries: PhotoEntry[] = [
  { file: 'IMG_0992.jpg' },
  { file: 'IMG_1008.jpg' },
  { file: 'DSC01690.jpg' },
  { file: 'DSC02527.jpg' },
  { file: 'DSC00749.jpg' },
  { file: 'DSC01387.jpg' },
  { file: 'DSC01610.jpg' },
  { file: 'DSC02732.jpg' },
  { file: 'DSC03409.jpg' },
  { file: 'IMG_0931.jpg' },
  { file: 'IMG_0114.jpg' },
  { file: 'IMG_0801.jpg' },
  { file: 'IMG_9308.jpg' },
  { file: 'IMG_9397.jpg' },
  { file: 'IMG_9473.jpg' },
  { file: 'IMG_9529.jpg' },
  { file: 'IMG_9677.jpg' },
  { file: 'IMG_9708.jpg' },
  { file: 'IMG_9812.jpg' },
  { file: '20240731_0104.jpg', year: '2024' },
  { file: '20240813_0053.jpg', year: '2024' },
  { file: '20240814_0011.jpg', year: '2024' },
  { file: '20240814_0085.jpg', year: '2024' },
  { file: '20240817_0225.jpg', year: '2024' },
];

const files = import.meta.glob<{ default: ImageMetadata }>('../photos/*.jpg', { eager: true });

export interface Photo extends PhotoEntry {
  num: string;
  src: ImageMetadata;
}

export const photos: Photo[] = entries.map((e, i) => {
  const mod = files[`../photos/${e.file}`];
  if (!mod) throw new Error(`photos.ts: src/photos/${e.file} not found`);
  return { ...e, num: String(i + 1).padStart(2, '0'), src: mod.default };
});

export function getPhoto(file: string): Photo {
  const p = photos.find((p) => p.file === file);
  if (!p) throw new Error(`photos.ts: no entry for ${file}`);
  return p;
}

export const usedSeries = series.filter((s) => photos.some((p) => p.series?.includes(s.id)));
