/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pure static marketing site — no server-side data, no API routes — so
  // it's exported as static HTML/CSS/JS (like the old Vite build) instead
  // of running a Node server.
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
