/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/categorie",
        destination: "/#categorieen",
        permanent: true, // 301 redirect (SEO vriendelijk)
      },
      {
        source: "/categorieen",
        destination: "/#categorieen",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
