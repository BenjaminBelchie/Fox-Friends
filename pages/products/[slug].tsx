import Image from 'next/image';
import { Product } from '../../types/Product';
import { prisma } from '../../prisma/prisma';
import {
  FlatProductsWithTagsAndImages,
  createFlatProductsObject,
} from '../../util/createFlatProductObject';
import { supabaseProductImagePrefix } from '../../util/imagePrefix';
import EmblaCarousel from '../../components/Carousel';
import { EmblaOptionsType } from 'embla-carousel-react';

type Props = {
  product: FlatProductsWithTagsAndImages;
};

export default function Product({ product }: Props) {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = product.images.length;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto sm:mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col-reverse sm:flex-row">
          <div className="flex-initial sm:w-1/2">
            <EmblaCarousel
              slides={SLIDES}
              options={OPTIONS}
              images={product.images.map(img => img.image)}
            />
          </div>

          <div className="mt-10 flex-initial sm:w-1/2 flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {product.title}
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

export async function getServerSideProps({ params }) {
  const product = await prisma.product.findUnique({
    where: { id: params.slug },
    include: { tags: { include: { tag: true } }, images: true },
  });
  const flatProduct = createFlatProductsObject(product);
  return {
    props: {
      product: flatProduct,
    },
  };
}
