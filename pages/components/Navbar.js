import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <div>
      <nav className="flex items-center justify-between  bg-slate-800  shadow-2xl flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 shadow-2xl text-white mr-6">
          <Link href="/">
            <img
              className="fill-current h-5 w-5 md:h-8 md:w-8 mr-2 hover:cursor-pointer "
              src="https://www.greatideasgreatlife.com/static/images/logo.png"
            />
          </Link>
          <Link href="/">
            <span className="hover:cursor-pointer font-semibold text-xs md:text-xl tracking-tight">
              Great Ideas Great Life
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggle}
            className="flex items-center px-2 py-1 sm:px-3 sm:py-2 border rounded text-slate-200 border-slate-400 hover:text-white hover:border-white"
          >
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
        <div
          className={`w-full block flex-grow lg:flex lg:items-center  lg:w-auto ${
            showMe ? "block" : "hidden lg:block"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <a className="block text-xs lg:text-base mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-500 mr-4">
                {" "}
                Listen
              </a>
            </Link>
            <Link href="/watch">
              <a className="block text-xs lg:text-base mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-500 mr-4">
                {" "}
                Watch
              </a>
            </Link>
          </div>
          <div>
            <Link href="/">
            <a
              
              className="inline-block  px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent text-xs lg:text-sm hover:text-black hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </a></Link>
            <Link href="/">
            <a
              href="#"
              className="ml-2 inline-block  px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent text-xs lg:text-sm hover:text-black hover:bg-white mt-4 lg:mt-0"
            >
              Signup
            </a></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
