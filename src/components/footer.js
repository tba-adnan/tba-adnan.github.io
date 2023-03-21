import React from "react";

export default class Footer extends React.Component {
    constructor() {
        super();

        console.log("it works!")
    }

  


render() {
    return(

<div>



<footer class="text-gray-600 body-font bg-blue-50 shadow-inner">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span class="ml-3 text-xl font-sans">Adnane Tebbaa</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-sans">© 2023 Adnane Tebbaa —
      <a href="" class="text-gray-600 ml-1 font-sans" rel="noopener noreferrer" target="_blank">@tba-adnan</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="ml-3 text-gray-500" href="https://www.linkedin.com/in/adnane-tba/">
        <svg  fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>



</div>

        
    );
}







}