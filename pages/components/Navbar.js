import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div >
      <nav className="flex items-center justify-between  bg-slate-800  shadow-2xl flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 shadow-2xl text-white mr-6">
          <img
            className="fill-current h-5 w-5 md:h-8 md:w-8 mr-2 "
            src="https://www.greatideasgreatlife.com/static/images/logo.png"
          />
          <span className="font-semibold text-xs md:text-xl tracking-tight">
            Great Ideas Great Life
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-2 py-1 sm:px-3 sm:py-2 border rounded text-slate-200 border-slate-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center  lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-500 mr-4">
                {" "}
                Listen
              </a>
            </Link>
            <Link href="/watch">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-500 mr-4">
                {" "}
                Watch
              </a>
            </Link>
          </div>

          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </a>
            <a
              href="#"
              className="ml-2 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
            >
              Signup
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
