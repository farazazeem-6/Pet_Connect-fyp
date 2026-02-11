import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pet Connect',
  description:
    'Find your new best friend, donate to animals in need, or report lost and found pets. Join our community to help every animal find a safe and loving home.',
  // icons: { icon: { url: '', type: 'image/svg+xml' } },
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const greycliff = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-greycliff',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={greycliff.variable} lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
