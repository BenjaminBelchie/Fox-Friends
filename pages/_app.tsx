import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Nav from '../components/Nav';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fox & Friends</title>
      </Head>
      <main className={`${montserrat.variable} font-sans h-screen`}>
        <Nav />
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}
