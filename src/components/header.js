import React from "react";

class Header extends React.Component {
    constructor(){
        super();
    }


render(){
return (


<div class=""> 

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-md fixed z-50 w-full top-0">

  <div class="container flex flex-wrap items-center justify-between mx-auto basis-1/3 ">
    {/* <p>Logo Here</p> */}
    <div class="flex-1 flex justify-center ml-auto ">
    <a href="" class="flex items-center basis-1/5">
        {/* <img src="" class="h-6 mr-3 sm:h-9" alt="" /> */}
        <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white font-sans">Tebbaa adnane</span>
    </a>
    <div className="divider divider-vertical h-12 flex justify-center pt-4"></div>
    <div class="hidden w-full md:block md:w-auto font-sans" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <a href="" class="text-2xl relative after:absolute after:bg-blue-300 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 font-sans">About</a>
        </li>
        <li><p class="text-2xl">·</p></li>
        <li>
          <a href="#" class="text-2xl block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-sans">Contact</a>
        </li>
        <li><p class="text-2xl">·</p></li>
        <div className="flex space-x-2">
        <li class="flex">
          <a href="#" class="text-2xl block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-sans">Newsletter</a>
        </li>
        <li>
        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-yellow-600 bg-yellow-200 uppercase last:mr-0 mr-1">
        soon
       </span>
        </li>
        </div>
      </ul>
    </div>
  
    </div>
    {/*  */}
    {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">...</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button> */}
    <div class="basis-1/6"> 
    {/* <p>Dark mode and Button</p> */}
    </div>
  </div>
</nav>
<br></br>
</div>

    );
}
}



export default Header;