import { useEffect } from 'react';
import { siteConfig } from '@/data/content';

interface PageMetaProps {
  title: string;
  description: string;
  path?: string;
}

export default function PageMeta({ title, description, path = '' }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const canonical = `${siteConfig.url}${path}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (link) {
      link.href = canonical;
    } else {
      link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonical;
      document.head.appendChild(link);
    }
  }, [title, description, path]);

  return null;
}
