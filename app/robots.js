export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /topic/ pages all redirect — blocking prevents crawl-budget waste on redirect chains
      disallow: ["/topic/"],
    },
    sitemap: "https://www.slimhuiswonen.nl/sitemap.xml",
  };
}
