import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="bg-white border-gray-200 flex">
        <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Fox & Friends
            </span>
          </Link>
          {/* Mobile Menu Button */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${navOpen ? '' : 'hidden'} w-full md:block md:w-auto`}
            id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/"
                  className={`block py-2 pl-3 pr-4  ${
                    router.pathname === '/'
                      ? 'text-white bg-cyan-700 md:text-cyan-700 md:bg-transparent'
                      : 'text-gray-900'
                  } rounded md:bg-transparent  md:p-0`}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`block py-2 pl-3 pr-4 ${
                    router.pathname === '/products'
                      ? 'text-white bg-cyan-700 md:text-cyan-700 md:bg-transparent'
                      : 'text-gray-900'
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0`}>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 pl-3 pr-4 ${
                    router.pathname === '/about'
                      ? 'text-white bg-cyan-700 md:text-cyan-700 md:bg-transparent'
                      : 'text-gray-900'
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0`}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 pl-3 pr-4 ${
                    router.pathname === '/contact'
                      ? 'text-white bg-cyan-700 md:text-cyan-700 md:bg-transparent'
                      : 'text-gray-900'
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0`}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className={`block py-2 pl-3 pr-4 ${
                    router.pathname === '/cart'
                      ? 'text-white bg-cyan-700 md:text-cyan-700 md:bg-transparent'
                      : 'text-gray-900'
                  } rounded hover:bg-gray-100 md:hidden md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0`}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden md:flex items-center mr-4">
          <Link href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </>
  );
}
