import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://utahhvacguide.com';
  
  // Static pages
  const routes = [
    '',
    '/blog',
    '/check-quote',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts
  const blogPosts = [
    'ac-replacement-cost-utah',
    'furnace-repair-vs-replace',
    'best-hvac-systems-utah-climate',
    'energy-audit-utah',
    'hvac-maintenance-checklist',
    'ogden-hvac-companies',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // County pages
  const counties = [
    'salt-lake',
    'davis',
    'weber',
    'utah',
    'tooele',
    'summit',
    'wasatch',
    'cache',
  ].map(slug => ({
    url: `${baseUrl}/counties/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...routes, ...blogPosts, ...counties];
}
