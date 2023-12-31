import 'app/styles/globals.css';
import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';

const kumbh = Kumbh_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Birthday',
	description: 'Happy birthday to Mrs. Wahab.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
      <body className={kumbh.className}>
        <div className='flex'>
        {children}
        </div>
      </body>
		</html>
	);
}
