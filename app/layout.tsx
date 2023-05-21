import './globals.css';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'devBadr 👋',
  description: 'My Own portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
