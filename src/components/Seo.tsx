import { ReactNode } from "react";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
}

export const Seo = ({ title, description, canonical }: SeoProps) => {
  // Basic SEO updates without external libs
  document.title = title;

  if (description) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }

  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;
  }

  return null as unknown as ReactNode;
};
