import { Geist, Inter } from 'next/font/google';
import { Metadata } from 'next';
import '../assets/styles/globals.css';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] });

export const matadata: Metadata = {
  title: 'Prostore',
  description: 'A modern ecommerce platofrm built with Next.jss',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
