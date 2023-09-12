import Gallary from '../../components/Gallary';
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid';
import { sortOptions } from '../../constants';
import MobileFilters from '../../components/ProductFilters/MobileFilters';
import Filters from '../../components/ProductFilters/Filters';
import { prisma } from '../../prisma/prisma';
import { createFlatProductsObjectArray } from '../../util/createFlatProductObject';
import lottieJson from '../../constants/not-found-animation.json';
import { InferGetServerSidePropsType } from 'next';
import Lottie from 'react-lottie-player';

export async function getServerSideProps() {
  const products = await prisma.product.findMany({
    include: { tags: { include: { tag: true } }, images: true },
  });
  const flatProducts = createFlatProductsObjectArray(products);

  const filters = await prisma.productFilters.findMany({
    where: { staus: 'ACTIVE' },
    include: { ProductFilterValues: true },
  });

  const categories = await prisma.productCategories.findMany({
    where: { status: 'ACTIVE' },
  });

  return {
    props: {
      data: flatProducts,
      filters: filters,
      categories: categories,
    },
  };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductsPage({
  data,
  filters,
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <MobileFilters
          mobileFiltersOpen={mobileFiltersOpen}
          filters={filters}
          categories={categories}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Products
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {categories.map(option => (
                        <Menu.Item key={option.category}>
                          {({ active }) => (
                            <a
                              href={`#${option.category}`}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm',
                              )}>
                              {option.category}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}>
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <Filters filters={filters} categories={categories} />

              {/* Product grid */}
              {data && data.length > 0 ? (
                <div className="lg:col-span-3">
                  <Gallary data={data} />
                </div>
              ) : (
                <div className="flex flex-col items-center lg:col-span-3">
                  <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    style={{ width: 400, height: 400 }}
                  />
                  <p className="font-medium">No products here</p>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
