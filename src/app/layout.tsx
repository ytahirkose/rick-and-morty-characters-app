import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactQueryProvider } from '@/components/react-query-provider';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ErrorBoundary } from '@/components/error-boundary';
import React, { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rick and Morty Characters - Explore the Universe',
  description:
    'Discover and filter Rick and Morty characters by status and gender. Browse through the vast collection with advanced filtering and pagination.',
  keywords: 'Rick and Morty, characters, API, filtering, status, gender',
  authors: [{ name: 'Rick and Morty App' }],
  openGraph: {
    title: 'Rick and Morty Characters',
    description:
      'Explore the vast universe of Rick and Morty characters with advanced filtering.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-7">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rick and Morty Characters
          </h1>
        </header>
        <main>
          <ErrorBoundary>
            <ReactQueryProvider>
              <NuqsAdapter>{children}</NuqsAdapter>
            </ReactQueryProvider>
          </ErrorBoundary>
        </main>
      </body>
    </html>
  );
}
