import { useRef } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Contact from '../components/Contact';

export default function Gallery({ data }) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Popular products
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data &&
            data.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const testData = [
    {
      id: '1',
      image: '/images/test.png',
      link: 'https://www.etsy.com/uk',
      name: 'Test product',
      price: '50',
      shortDescription:
        'This is a test product to show the elements on screen.',
    },
    {
      id: '2',
      image: '/images/test.png',
      link: 'https://www.etsy.com/uk',
      name: 'Test product',
      price: '50',
      shortDescription:
        'This is a test product to show the elements on screen.',
    },
    {
      id: '3',
      image: '/images/test.png',
      link: 'https://www.etsy.com/uk',
      name: 'Test product',
      price: '50',
      shortDescription:
        'This is a test product to show the elements on screen.',
    },
    {
      id: '4',
      image: '/images/test.png',
      link: 'https://www.etsy.com/uk',
      name: 'Test product',
      price: '50',
      shortDescription:
        'This is a test product to show the elements on screen.',
    },
  ];

  return {
    props: {
      data: testData,
    },
  };
}
