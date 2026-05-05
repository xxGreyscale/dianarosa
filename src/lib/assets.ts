/**
 * Central asset registry.
 *
 * WORKFLOW:
 *   1. Run `bash download-assets.sh` to pull real images from Figma
 *   2. Change imports below from .svg?url to .png?url
 *   3. Delete the old .svg placeholders from src/assets/images/
 *
 * After downloading, change each line like:
 *   import heroPort from '../assets/images/hero-port.svg?url';
 * to:
 *   import heroPort from '../assets/images/hero-port.png?url';
 */

// ── IMAGES (swap .svg → .png after running download-assets.sh) ──
import heroPort from '../assets/images/hero-port.svg?url';
import truck from '../assets/images/truck.svg?url';
import driver from '../assets/images/driver.svg?url';
import team from '../assets/images/team.svg?url';
import workers from '../assets/images/workers.svg?url';
import manPhone from '../assets/images/man-phone.svg?url';
import womanHeadset from '../assets/images/woman-headset.svg?url';
import manThinking from '../assets/images/man-thinking.svg?url';

// ── ILLUSTRATIONS ──
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
