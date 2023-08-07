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
      <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Popular products
          </p>
        </div>
      </div>
      <Gallary data={data} />
      <Contact />
    </>
  );
}
