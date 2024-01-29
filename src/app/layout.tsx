/* eslint-disable react/jsx-key */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] });
const pages = [
  { title: 'Home', slug: '/' },
  { title: 'Blog', slug: '/blog' },
  { title: 'About', slug: '/about' },
];
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-sm mx-auto md:max-w-2xl lg:max-w-5xl mt-5'>
          <nav className='flex items-center justify-between gap-4'>
            {pages.map((page) => (
              <Link className='relative block cursor-pointer px-2 py-1 rounded-lg hover:bg-zinc-100' href={page.slug}>{page.title}</Link>
            ))}
          </nav>
          <hr className='mt-5 mb-10'/>
          {children}
        </div>
      </body>
    </html>
  );
}
