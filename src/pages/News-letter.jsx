import React from 'react';
import Footer from '../components/footer';

function Newsletter() {
  return (
  

<div className='pb-0 pt-9 '>
<div className="flex justify-center items-center h-screen bg-blue-500">
  <div className="max-w-none w-[650px]  mx-2">
    <iframe
      className="shadow-lg  rounded-2xl"
      src="https://tebbaa.substack.com/embed"
      width="99%"
      height="320"
      style={{ border: '1px solid #EEE', background: '' }}
      frameborder="0"
      scrolling="no"
      allowtransparency="true"
    ></iframe>
     <div className="pt-7">
            <a href="/" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
<span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
<span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white font-sans">Back</span>
</a>
            </div>
  </div>

</div>
<div className=''> <Footer/></div>

</div>





 










  );
}

export default Newsletter;

