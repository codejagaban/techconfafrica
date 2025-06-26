import type { ImageMetadata } from "astro";

declare module "*.svg" {
  const content: ImageMetadata;
  export default content;
}
