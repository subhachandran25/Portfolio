import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '700', '800'], variable: '--font-manrope' });

export const metadata = {
  title: 'Subha Chandran · Portfolio',
  description: 'Subha Chandran — strategy, growth and analytics and insights. Global MBA, SP Jain School of Global Management.',
  openGraph: {
    title: 'Subha Chandran · Portfolio',
    description: 'Strategy, growth and analytics and insights. Global MBA, SP Jain.',
    images: ['/photo.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`js dim ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
