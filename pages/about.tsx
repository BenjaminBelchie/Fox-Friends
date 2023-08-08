import Image from 'next/image';

export default function AboutPage() {
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
            src="/about-photo.png"
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
            Hi, I'm Anna
          </p>
          <p className="max-w-2xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus.
          </p>
        </div>
      </div>
    </main>
  );
}
