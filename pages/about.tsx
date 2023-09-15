import Image from 'next/image';
import { prisma } from '../prisma/prisma';
import { InferGetServerSidePropsType } from 'next';
import { supabaseProductImagePrefix } from '../util/imagePrefix';

export async function getServerSideProps() {
  const aboutMeData = await prisma.aboutMeDetails.findFirst();
  return {
    props: {
      aboutMeData: aboutMeData,
    },
  };
}

export default function AboutPage({
  aboutMeData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      {/* Title */}
      <div className="pb-6 pt-24 border-b border-gray-200">
        <p className="text-4xl font-bold tracking-tight text-gray-900">
          About me
        </p>
      </div>

      <div className="flex flex-col gap-7 items-center w-full pt-6 md:items-start md:flex-row">
        <div className="flex flex-col gap-4">
          <Image
            className="w-70 h-70 rounded-md"
            height={350}
            width={350}
            src={supabaseProductImagePrefix + aboutMeData.image}
            alt="Rounded avatar"
          />
          <div className="flex gap-2 justify-center">
            <a href="https://www.etsy.com/uk/?ref=lgo" target="_blank">
              <img src="/etsy-logo.svg" height={25} width={25} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="/instagram-logo.svg" height={25} width={25} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img src="/facebook-logo.svg" height={25} width={25} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold tracking-tight text-gray-900">
            {aboutMeData.titleText}
          </p>
          <p className="max-w-2xl">{aboutMeData.description}</p>
        </div>
      </div>
    </main>
  );
}
