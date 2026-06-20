import Hero from '@/components/hero';
import FeaturedServices from '@/components/featured-services';
import BrandStory from '@/components/brand-story';
import BookingCTA from '@/components/booking-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LUMA Atelier - Luxury Salon in Amsterdam',
  description: 'Experience luxury beauty and wellness treatments at LUMA Atelier. Book your appointment for precision haircuts, luxury blowouts, bridal makeup, and more.',
  openGraph: {
    title: 'LUMA Atelier - Luxury Salon in Amsterdam',
    description: 'Experience luxury beauty and wellness treatments at LUMA Atelier. Book your appointment for precision haircuts, luxury blowouts, bridal makeup, and more.',
    url: 'https://www.luma-atelier.com/',
    images: [
      {
        url: '/images/home-og.svg.png',
        width: 1200,
        height: 630,
        alt: 'LUMA Atelier homepage',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUMA Atelier - Luxury Salon in Amsterdam',
    description: 'Experience luxury beauty and wellness treatments at LUMA Atelier. Book your appointment for precision haircuts, luxury blowouts, bridal makeup, and more.',
    images: ['/images/home-og.svg.png'],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <BrandStory />
      <BookingCTA />
    </>
  );
}