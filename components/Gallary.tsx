import { Product } from '@prisma/client';
import ProductCard from './ProductCard';
import { FlatProductsWithTagsAndImages } from '../util/createFlatProductObject';

type Props = {
  data: FlatProductsWithTagsAndImages[];
};

export default function Gallary({ data }: Props) {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data &&
          data.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}
