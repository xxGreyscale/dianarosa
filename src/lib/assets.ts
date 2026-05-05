/**
 * Central asset registry. All pages import their imagery from here so swapping
 * the placeholder SVGs for real photography (PNG / WebP) is a one-file change.
 *
 * Replacement workflow:
 *   1. Drop the new file into src/assets/images/
 *   2. Update the import below to point at the new filename
 *   3. Done — every page picks up the new asset automatically
 */

import heroPort from '../assets/images/hero-port.svg';
import truck from '../assets/images/truck.svg';
import driver from '../assets/images/driver.svg';
import team from '../assets/images/team.svg';
import workers from '../assets/images/workers.svg';
import manPhone from '../assets/images/man-phone.svg';
import womanHeadset from '../assets/images/woman-headset.svg';
import manThinking from '../assets/images/man-thinking.svg';

import quoteDoc from '../assets/illustrations/quote-doc.svg';

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
