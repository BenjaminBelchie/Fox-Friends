import Image from 'next/image';
import { Product } from '../../types/Product';

export default function Product({ product }) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <Image
            alt="coffee"
            className="rounded-lg"
            src={product.image}
            width={560}
            height={640}
          />
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {product.name}
            </h1>
            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              £{product.price}
            </h1>
            <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
              Description
            </div>
            <p className="max-w-xl">{product.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const product: Product = {
    id: 1,
    image: '/test.png',
    link: 'https://www.etsy.com/uk',
    name: 'Test product',
    price: '50',
    shortDescription: 'This is a test product to show the elements on screen.',
    longDescription: `Introducing our adorable Handmade Crochet Cow - the perfect cuddly companion for children and animal lovers of all ages! Crafted with love and care, this unique and whimsical creation is sure to capture hearts and bring smiles to faces. Each crochet cow is meticulously handcrafted by skilled artisans using soft and premium quality yarn, ensuring a plush and huggable texture that is gentle to the touch. The attention to detail is evident in every stitch, from the charming embroidered eyes to the cute little tail, making it a truly one-of-a-kind piece.`,
  };
  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  let fullPaths = [];

  return {
    paths: fullPaths,
    fallback: 'blocking',
  };
}
