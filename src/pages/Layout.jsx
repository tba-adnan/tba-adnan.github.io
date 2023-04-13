import { Outlet, Link } from "react-router-dom";

const Layout = () => {
return (
<>

  <header className="w-full bg-white border-t-4 border-blue-700 fixed z-50 shadow font-sans">
    <div
      className="container max-w-screen-lg mx-auto flex flex-wrap py-4 md:py-5 lg:py-5 flex-col md:flex-row items-center md:px-5 text-gray-600 dark:text-gray-200">
      <Link to="/" className="text-gray-900 flex title-font font-medium items-center cursor-pointer mb-2 md:mb-0">
      <span className=" hover:text-blue-900 sans-serif text-4xl ">Adnane Tebbaa</span>
      </Link>
      <div className="text-lg ">
        <nav
          className="md:mr-auto md:ml-4 md:pl-4 md:border-l lg:px-10 md:border-gray-400 flex flex-wrap items-center text-base justify-center lg:space-x-8 md:space-x-2 sm:space-x-1">
         <div className="pr-4 pt-1">
         <a href="/about"
            class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-blue-700 inline-block shadow-md">
            <span
              class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-700 group-hover:h-full opacity-90"></span>
            <span class="relative group-hover:text-white sans-serif">About</span>
          </a>
         </div>

          <div className="pb-1">
          <a href="/news-letter"
            class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group shadow-md">
            <span
              class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
            <span
              class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white font-sans">News
              Letter</span>
          </a>
          </div>
        </nav>
      </div>
      {/*
      <Link to="/contact"
        className="hidden md:inline-flex lg:inline-flex items-center text-green-700 border-green-700 border py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      test
      </Link> */}
    </div>
  </header>
  <Outlet />
</>
)
};

export default Layout;