/**
 * Central asset registry. All pages import their imagery from here so swapping
 * the placeholder SVGs for real photography (PNG / WebP) is a one-file change.
 *
 * The `?url` suffix tells Vite to return the asset's URL (not the inlined source).
 * Required so SVGs work in both <img src> and CSS background-image: url().
 *
 * Replacement workflow:
 *   1. Drop the new file into src/assets/images/
 *   2. Update the import below to point at the new filename (keep the ?url)
 *   3. Done — every page picks up the new asset automatically
 */

import heroPort from '../assets/images/hero-port.svg?url';
import truck from '../assets/images/truck.svg?url';
import driver from '../assets/images/driver.svg?url';
import team from '../assets/images/team.svg?url';
import workers from '../assets/images/workers.svg?url';
import manPhone from '../assets/images/man-phone.svg?url';
import womanHeadset from '../assets/images/woman-headset.svg?url';
import manThinking from '../assets/images/man-thinking.svg?url';

import quoteDoc from '../assets/illustrations/quote-doc.svg?url';

export const IMAGES = {
  heroPort,
  truck,
  driver,
  team,
  workers,
  manPhone,
  womanHeadset,
  manThinking,
} as const;

export const ILLUSTRATIONS = {
  quoteDoc,
} as const;
