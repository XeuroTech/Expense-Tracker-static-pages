import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output is required by Cloudflare's OpenNext adapter
  // (`opennextjs-cloudflare build` reads `.next/standalone`).
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
