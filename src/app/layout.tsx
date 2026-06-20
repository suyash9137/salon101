
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter, EB_Garamond } from 'next/font/google';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ebGaramond = EB_Garamond({ subsets: ['latin'], variable: '--font-eb-garamond' });

// LocalBusiness JSON-LD schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LUMA Atelier",
  "image": [
    "https://www.luma-atelier.com/images/logo.png"
  ],
  "@id": "",
  "url": "https://www.luma-atelier.com/",
  "telephone": "+31-20-1234567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Herengracht 456",
    "addressLocality": "Amsterdam",
    "postalCode": "1017 CA",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.3676",
    "longitude": "4.9041"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "00:00",
      "closes": "00:00"
    }
  ],
  "priceRange": "$$$",
  "servesCuisine": [
    "Hair Salon",
    "Beauty Salon",
    "Wellness Center"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.luma-atelier.com'),
  title: {
    template: '%s | LUMA Atelier',
    default: 'LUMA Atelier',
  },
  description: 'Luxury Hair, Beauty & Wellness Studio in Amsterdam',
  keywords: [
    'luxury salon',
    'amsterdam',
    'hair salon',
    'beauty studio',
    'wellness',
    'luxury beauty',
    'premium salon',
    'bridal makeup',
    'head spa',
    'luxury hair treatments'
  ],
  authors: [
    {
      name: 'LUMA Atelier',
      url: 'https://www.luma-atelier.com',
    }
  ],
  creator: 'LUMA Atelier',
  publisher: 'LUMA Atelier',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'LUMA Atelier',
    description: 'Luxury Hair, Beauty & Wellness Studio in Amsterdam',
    url: 'https://www.luma-atelier.com',
    siteName: 'LUMA Atelier',
    images: [
      {
        url: '/images/og.svg.png',
        width: 1200,
        height: 630,
        alt: 'LUMA Atelier luxury salon',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUMA Atelier',
    description: 'Luxury Hair, Beauty & Wellness Studio in Amsterdam',
    images: ['/images/og.svg.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${ebGaramond.variable} font-body bg-background text-on-background antialiased`}>
        <Navigation />
        <main className="pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}