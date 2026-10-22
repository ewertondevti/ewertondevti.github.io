import type { MetadataRoute } from 'next';
import { profile } from '@/lib/profile';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return profile.siteUrl ? [{ url: `${profile.siteUrl}${profile.basePath}/`, changeFrequency: 'monthly', priority: 1 }] : [];
}
