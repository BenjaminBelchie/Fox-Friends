import Header from '../components/Header';
import Contact from '../components/Contact';
import Gallary from '../components/Gallary';

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

export default function Homepage({ data }) {
  return (
    <>
      <Header />
      <Gallary data={data} />
      <Contact />
    </>
  );
}
