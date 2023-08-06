import Gallary from '../../components/Gallary';
import { Product } from '../../types/Product';

export async function getStaticProps() {
  const testData: Product[] = [];

  for (let i = 0; i < 12; i++) {
    testData.push({
      id: i,
      image: '/test.png',
      link: 'https://www.etsy.com/uk',
      name: 'Test product',
      price: '50',
      shortDescription:
        'This is a test product to show the elements on screen.',
      longDescription: 'This is a test product',
    });
  }
  return {
    props: {
      data: testData,
    },
  };
}

export default function ProductsPage({ data }) {
  return (
    <>
      <Gallary data={data} />
    </>
  );
}
