import type { Metadata } from 'next';
import { profile } from '@/lib/profile';
import './globals.css';

const title = 'Ewerton Souza — Senior Frontend Developer & Tech Lead';
const description = 'Frontend engineering and technical leadership. 7+ years building software, with experience in React, Next.js, TypeScript, GIS, water and infrastructure.';
export const metadata: Metadata = {
  title, description, applicationName: 'Ewerton Souza Portfolio',
  ...(profile.siteUrl ? { metadataBase: new URL(profile.siteUrl), alternates: { canonical: `${profile.siteUrl}${profile.basePath}/` } } : {}),
  keywords: ['Ewerton Souza', 'Senior Frontend Developer', 'Tech Lead', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: profile.name }],
  openGraph: { title, description, type: 'website', locale: 'en_GB', alternateLocale: 'pt_PT', ...(profile.siteUrl ? { images: [{ url: `${profile.siteUrl}${profile.basePath}/social.png`, width: 1200, height: 630, alt: title }] } : {}) },
  twitter: { card: 'summary_large_image', title, description, ...(profile.siteUrl ? { images: [`${profile.siteUrl}${profile.basePath}/social.png`] } : {}) },
  robots: { index: true, follow: true },
  icons: { icon: `${profile.basePath}/icon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: profile.role,
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Frontend Engineering', 'Technical Leadership'],
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Instituto Federal de São Paulo' },
    sameAs: [profile.linkedin, profile.github].filter(Boolean), ...(profile.siteUrl ? { url: `${profile.siteUrl}${profile.basePath}/` } : {}),
  };
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){}` }} /></head><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />{children}</body></html>;
}
