import Header from '../components/Header';
import Contact from '../components/Contact';
import Gallary from '../components/Gallary';
import { Product } from '../types/Product';
import Nav from '../components/Nav';

export async function getStaticProps() {
  const testData: Product[] = [
    {
      id: 1,
      image: '/test.png',
      link: 'https://www.etsy.com/uk',
      name: 'Test product',
      price: '50',
      shortDescription:
        'This is a test product to show the elements on screen.',
      longDescription: 'This is a test product',
    },
    {
      id: 2,
      image: '/test.png',
      link: 'https://www.etsy.com/uk',
      name: 'Test product',
      price: '50',
      shortDescription:
        'This is a test product to show the elements on screen.',
      longDescription: 'This is a test product',
    },
    {
      id: 3,
      image: '/test.png',
      link: 'https://www.etsy.com/uk',
      name: 'Test product',
      price: '50',
      shortDescription:
        'This is a test product to show the elements on screen.',
      longDescription: 'This is a test product',
    },
    {
      id: 4,
      image: '/test.png',
      link: 'https://www.etsy.com/uk',
      name: 'Test product',
      price: '50',
      shortDescription:
        'This is a test product to show the elements on screen.',
      longDescription: 'This is a test product',
    },
  ];

  return {
    props: {
      data: testData,
    },
  };
}

export default function Homepage({ data }) {
  return (
    <>
      <Header />
      <Gallary data={data} />
      <Contact />
    </>
  );
}
