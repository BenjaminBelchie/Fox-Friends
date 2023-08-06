import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import Nav from '../components/Nav';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Anna's Crochet</title>
      </Head>
      <main className={`${montserrat.variable} font-sans h-screen`}>
        <Nav />
        <Component {...pageProps} />
      </main>
    </>
  );
}
