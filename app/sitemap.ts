import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { getPosts } from '@/lib/content';
import { SITE_URL } from '@/lib/meta';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/archive',
    ...projects.map((p) => `/project/${p.slug}`),
    '/writing',
    ...getPosts().map((p) => `/writing/${p.slug}`),
    '/changelog',
  ];
  return paths.map((p) => ({ url: SITE_URL + p }));
}
