import { Roboto } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export const metadata = {
  title: 'devBadr 👋',
  description: 'My Own portfolio',
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-zinc-50">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
