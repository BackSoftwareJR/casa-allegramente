/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ottimizzazione immagini — formati moderni
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [],
  },

  // Compressione
  compress: true,

  // Trailing slash — compatibile con Hostinger
  trailingSlash: false,

  // Headers di sicurezza
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  // Redirect pagine legacy (se si migra dal vecchio dominio)
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
