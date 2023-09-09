import Header from '../components/Header';
import Contact from '../components/Contact';
import Gallary from '../components/Gallary';
import { createFlatProductsObjectArray } from '../util/createFlatProductObject';
import { prisma } from '../prisma/prisma';
import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';

export async function getServerSideProps() {
  const hero = await prisma.siteConfig.findFirst();
  const featuredProducts = await prisma.product.findMany({
    where: { isFeatured: true },
    include: { tags: { include: { tag: true } }, images: true },
    orderBy: { featuredIndex: 'asc' },
  });
  const flatProducts = createFlatProductsObjectArray(featuredProducts);

  return {
    props: {
      data: flatProducts,
      hero: hero,
    },
  };
}

export default function Homepage({
  data,
  hero,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('HERO ', hero);
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={hero && hero.heroImage ? hero.heroImage : ''}
          as="image"
        />
      </Head>
      <Header data={hero} />
      <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Popular products
          </p>
        </div>
      </div>
      {data && data.length > 0 ? (
        <Gallary data={data} />
      ) : (
        <div className="flex flex-col items-center">
          <Image height={300} width={300} src="/not-found.svg" alt={''} />
          <p>Whoops, Looks like there are no featured products</p>
        </div>
      )}
      <Contact />
    </>
  );
}
