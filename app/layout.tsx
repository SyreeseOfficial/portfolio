import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import Cursor from '@/components/Cursor';
import { SITE_URL } from '@/lib/meta';
import './globals.css';

const sans = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/favicon-180.png',
  },
};

// Runs before first paint so the theme and intro never flash.
const INIT = `(function(){var d=document.documentElement;try{var s=localStorage.getItem('sd-theme');if(s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches)d.dataset.theme='dark';if(location.pathname==='/'&&!localStorage.getItem('sd-intro-seen')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){localStorage.setItem('sd-intro-seen','1');d.dataset.intro='1'}}catch(e){}})()`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INIT }} />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
