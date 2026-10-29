import type { Metadata } from 'next';
import './globals.css';
import { LocaleProvider } from '@/context/LocaleContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { InstitutionalPartners } from '@/components/common/InstitutionalPartners';

export const metadata: Metadata = {
  title: {
    default: 'Morocco Herpetology | Scientific Reference Platform & Field Conservation',
    template: '%s | Morocco Herpetology',
  },
  description: 'National scientific platform and digital atlas dedicated to the study, documentation, taxonomy, and conservation of Morocco\'s amphibians, reptiles, and scorpions.',
  keywords: [
    'Morocco Herpetology',
    'Moroccan reptiles',
    'Amphibians of Morocco',
    'Snakes of Morocco',
    'Lizards of Morocco',
    'Scorpions of Morocco',
    'HerpAtlas Morocco',
    'Viperidae Morocco',
    'Cerastes cerastes',
    'Daboia mauritanica',
    'Chamaeleo chamaeleon',
    'Morocco biodiversity conservation'
  ],
  authors: [{ name: 'Morocco Herpetology Scientific Committee' }],
  metadataBase: new URL('https://moroccoherpetology.com'),
  openGraph: {
    title: 'Morocco Herpetology | Scientific Reference Platform',
    description: 'Documenting and conserving the herpetological and arachnological biodiversity of Morocco.',
    url: 'https://moroccoherpetology.com',
    siteName: 'Morocco Herpetology',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=DM+Mono:wght@300;400;500&family=Noto+Kufi+Arabic:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ paddingTop: 'var(--header-height)' }}>
        <LocaleProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <InstitutionalPartners />
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
