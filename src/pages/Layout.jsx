import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

<header className="w-full bg-white border-t-4 border-blue-700 fixed z-50 shadow font-sans">
      <div className="container max-w-screen-lg mx-auto flex flex-wrap py-4 md:py-5 lg:py-5 flex-col md:flex-row items-center md:px-5 text-gray-600 dark:text-gray-200">
        <Link to="/" className="text-gray-900 flex title-font font-medium items-center cursor-pointer mb-2 md:mb-0">
          <span className="text-xl hover:text-blue-900 font-sans text-4xl pl-">Adnane Tebbaa</span>
        </Link>
      <div className="text-lg ">
      <nav className="md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center lg:space-x-8 md:space-x-2 sm:space-x-1">
          <Link to="/about" className="mr-5 cursor-pointer hover:text-blue-700 font-sans text-xl pl-8">About</Link>
          {/* <Link to="/contact" className="mr-5 cursor-pointer hover:text-blue-700 font-sans text-xl">Contact</Link> */}
          <a href="/news-letter" className="mr-5 cursor-pointer hover:text-blue-700 font-sans text-xl p-[4px] bg-white border-black rounded-xl">
            News Letter
            <span className="inline-flex items-center ml-1 rounded-full text-[19px] leading-4 bg-red-600 px-[10px] py-[3px] font-sans text-white">Live!</span>
          </a>
        </nav>
      </div>
        {/* <Link to="/contact" className="hidden md:inline-flex lg:inline-flex items-center text-green-700 border-green-700 border py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          test
        </Link> */}
      </div>
    </header>











      <Outlet />
    </>
  )
};

export default Layout;