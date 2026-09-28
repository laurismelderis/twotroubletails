import type { Metadata } from "next";

export const site = {
  name: "Dr. Neretniece",
  url: process.env.SITE_URL || "http://localhost:3000",
  indexable: Boolean(process.env.SITE_URL) && process.env.SITE_INDEXABLE === "true",
  original: "https://annija-neretniece-v0halx.mailerpage.io",
  email: "blossomwithannie@gmail.com",
  instagram: "https://www.instagram.com/dr.neretniece/",
  facebook: "https://www.facebook.com/profile.php?id=61586412203028",
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: "lv_LV",
      type: "website",
      images: [{ url: "/images/lecture-product.webp", width: 1600, height: 894, alt: "Svaigbarošanas pamati — dr. Annija Neretniece" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/lecture-product.webp"] },
  };
}
