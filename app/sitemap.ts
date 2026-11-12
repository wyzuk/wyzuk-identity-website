import { MetadataRoute } from 'next';
import { getAllCanonicalRoutes, BASE_URL } from '@/lib/data/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAllCanonicalRoutes();

  return routes.map((route) => {
    const cleanPath = route.path.endsWith('/') ? route.path : `${route.path}/`;
    return {
      url: `${BASE_URL}${cleanPath}`,
      lastModified: new Date('2026-10-27T00:00:00.000Z'),
      changeFrequency: route.changefreq,
      priority: route.priority,
    };
  });
}
