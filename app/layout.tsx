import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Dr. Neretniece — suņu un kaķu uzturs", template: "%s | Dr. Neretniece" },
  robots: { index: site.indexable, follow: site.indexable },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#annija`,
    name: "Annija Neretniece",
    jobTitle: "Veterinārārste",
    url: `${site.url}/kontakti`,
    image: `${site.url}/images/annija.webp`,
    sameAs: [site.instagram, site.facebook],
    knowsLanguage: "lv",
  };
  return (
    <html lang="lv">
      <body>
        <a className="skip-link" href="#main">Pāriet uz saturu</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
