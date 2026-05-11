/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.s-bol.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },

  async redirects() {
    return [
      {
        source: "/categorie",
        destination: "/#categorieen",
        permanent: true,
      },
      {
        source: "/categorieen",
        destination: "/#categorieen",
        permanent: true,
      },
      // Aanraders buiten verlichtingsfocus
      {
        source: "/aanraders/beste-robotstofzuigers-2026",
        destination: "/aanraders/beste-slimme-verlichting",
        permanent: true,
      },
      {
        source: "/aanraders/beste-slimme-deurbel",
        destination: "/aanraders/beste-slimme-sensoren",
        permanent: true,
      },
      {
        source: "/aanraders/beste-slimme-camera",
        destination: "/aanraders/beste-slimme-verlichting",
        permanent: true,
      },
      {
        source: "/aanraders/beste-slimme-slot",
        destination: "/aanraders/beste-smart-home-hub",
        permanent: true,
      },
      // Categorie redirects
      {
        source: "/categorie/slimme-cameras",
        destination: "/categorie/slimme-verlichting",
        permanent: true,
      },
      {
        source: "/categorie/slimme-deurbellen",
        destination: "/categorie/slimme-verlichting",
        permanent: true,
      },
      // Topic redirects
      {
        source: "/topic/beveiliging",
        destination: "/aanraders/beste-slimme-verlichting",
        permanent: true,
      },
      {
        source: "/topic/smart-home-basis",
        destination: "/aanraders/beste-smart-home-hub",
        permanent: true,
      },
      {
        source: "/topic/wifi-netwerk",
        destination: "/how-to/wifi-verbeteren-voor-smart-home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
