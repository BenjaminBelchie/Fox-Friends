import { Prisma, ProductImages } from '@prisma/client';

export type ProductWithTagsAndImages = Prisma.ProductGetPayload<{
  include: { tags: { include: { tag } }; images: true };
}>;

export type FlatProductsWithTagsAndImages = {
  id: string;
  price: number;
  status: string;
  title: string;
  tags: string[];
  isFeatured: boolean;
  featuredIndex?: number;
  shortDescription: string;
  longDescription: string;
  images: ProductImages[];
};

export function createFlatProductsObjectArray(
  products: ProductWithTagsAndImages[],
): FlatProductsWithTagsAndImages[] {
  return products.map(product => {
    return {
      id: product.id,
      price: parseFloat(product.price),
      shortDescription: product.shortDescription,
      longDescription: product.longDescription,
      status: product.status,
      title: product.title,
      isFeatured: product.isFeatured,
      featuredIndex: product.featuredIndex,
      images: product.images,
      tags: product.tags.map(tag => tag.tag.tagName),
    };
  });
}

export function createFlatProductsObject(
  product: ProductWithTagsAndImages,
): FlatProductsWithTagsAndImages {
  return {
    id: product.id,
    price: parseFloat(product.price),
    shortDescription: product.shortDescription,
    longDescription: product.longDescription,
    status: product.status,
    title: product.title,
    isFeatured: product.isFeatured,
    featuredIndex: product.featuredIndex,
    images: product.images,
    tags: product.tags.map(tag => tag.tag.tagName),
  };
}
