import { Inter, Inter_Tight } from 'next/font/google';

import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://summerbrainrot.com'),
  title: {
    default: 'Summer Brain Rot - Transform Your Digital Summer',
    template: '%s | Summer Brain Rot',
  },
  description:
    'Where young entrepreneurs learn to build real SaaS businesses through hands-on development. Join the most productive summer program for digital natives.',
  keywords: [
    'Summer Program',
    'Entrepreneurship',
    'SaaS Development',
    'Youth Programs',
    'Coding Bootcamp',
    'Teen Entrepreneurs',
    'Digital Skills',
    'Web Development',
  ],
  authors: [{ name: 'Summer Brain Rot' }],
  creator: 'Summer Brain Rot',
  publisher: 'Summer Brain Rot',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Summer Brain Rot - Transform Your Digital Summer',
    description:
      'Where young entrepreneurs learn to build real SaaS businesses through hands-on development. Join the most productive summer program for digital natives.',
    siteName: 'Summer Brain Rot',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Summer Brain Rot - Transform Your Digital Summer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summer Brain Rot - Transform Your Digital Summer',
    description:
      'Where young entrepreneurs learn to build real SaaS businesses through hands-on development. Join the most productive summer program for digital natives.',
    images: ['/og-image.jpg'],
    creator: '@summerbrainrot',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`h-screen ${inter.variable} ${interTight.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
