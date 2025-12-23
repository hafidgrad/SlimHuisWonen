import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://slimhuiswonen.nl"),
  title: {
    default: "SlimHuisWonen – Slimme spullen voor een slimmer huis",
    template: "%s | SlimHuisWonen",
  },
  description:
    "Maak je huis slimmer met duidelijke uitleg, tips en aanbevelingen voor slimme verlichting, sensoren, deurbellen, camera’s en meer.",

  verification: {
    google: "0aNFzCIK8siKRIfCTQ2Ew7jkCKlw3GRKcz31o7dS6hY",
  },

  openGraph: {
    title: "SlimHuisWonen – Slimme spullen voor een slimmer huis",
    description:
      "Handleidingen, tips en productaanraders voor een slim huis. Van slimme verlichting tot beveiliging.",
    url: "https://slimhuiswonen.nl",
    siteName: "SlimHuisWonen.nl",
    type: "website",
  },

  alternates: {
    canonical: "https://slimhuiswonen.nl",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CZHW882M4T"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZHW882M4T');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
