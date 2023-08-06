import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="h-full lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute">
            <div className="flex flex-col">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've got a bit lost
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! Please return to our hompage.
              </p>
              <Link
                href="/"
                className="sm:w-fit lg:w-fit my-2 border md py-4 px-8 text-center rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-opacity-50">
                Return to home
              </Link>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
}
