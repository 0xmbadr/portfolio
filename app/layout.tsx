import { Cairo } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'devBadr 👋',
  description: 'My Own portfolio',
};

const cairo = Cairo({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cairo.className}>
      <body className="bg-zinc-50">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
