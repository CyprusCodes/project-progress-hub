/**
 * BunnyCDN Dynamic Images optimization utilities.
 * Appends URL parameters for on-the-fly image transformation.
 * @see https://docs.bunny.net/docs/cdn-image-optimization-dynamic-images
 */

const BUNNY_CDN_HOSTS = ["b-cdn.net", "bunnycdn.com"];

export type ImagePreset =
  | "hero"        // Full hero banners (LogGroupDetail, cards)
  | "card"        // Card hero images
  | "icon"        // Small icons/logos
  | "gallery-thumbnail"  // Gallery grid thumbnails
  | "gallery-slider"    // ImageSlider 16:9
  | "gallery-lightbox"  // Full-size lightbox
  | "cover";      // MonthlyProgress cover images

const PRESET_PARAMS: Record<ImagePreset, string> = {
  hero: "width=1600&aspect_ratio=16:9&format=webp&quality=85&sharpen=true",
  card: "width=1200&aspect_ratio=16:9&format=webp&quality=85&sharpen=true",
  icon: "width=288&aspect_ratio=1:1&format=webp&quality=80",
  "gallery-thumbnail": "width=400&aspect_ratio=4:3&format=webp&quality=80",
  "gallery-slider": "width=1200&aspect_ratio=16:9&format=webp&quality=85&sharpen=true",
  "gallery-lightbox": "width=1920&format=webp&quality=90",
  cover: "width=800&aspect_ratio=16:9&format=webp&quality=85&sharpen=true",
};

/**
 * Checks if the URL is served through BunnyCDN.
 */
export function isBunnyCdnUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  try {
    const host = new URL(url).hostname.toLowerCase();
    return BUNNY_CDN_HOSTS.some((h) => host.includes(h));
  } catch {
    return false;
  }
}

/**
 * Appends BunnyCDN Dynamic Images parameters to optimize delivery.
 * Returns the original URL unchanged if not a BunnyCDN URL.
 *
 * Supports two modes:
 * 1. Inline params (default): width, aspect_ratio, format, quality, etc.
 * 2. Image Classes: Set VITE_BUNNY_USE_IMAGE_CLASSES=true and create matching
 *    classes in Bunny dashboard (Optimizer → Image Classes) with names: hero,
 *    card, icon, gallery-thumbnail, gallery-slider, gallery-lightbox, cover.
 */
export function getOptimizedImageUrl(url: string, preset: ImagePreset): string {
  if (!url || !isBunnyCdnUrl(url)) return url;

  const useImageClasses = import.meta.env.VITE_BUNNY_USE_IMAGE_CLASSES === "true";
  const params = useImageClasses
    ? `img_class=${preset}`
    : PRESET_PARAMS[preset];

  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${params}`;
}
