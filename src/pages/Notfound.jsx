const Notfound = () => {

  return (
    <section class="px-4 py-24 mx-auto max-w-7xl pt-[170px] ">
  <div class="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
    <div>
      <p class="mb-2 text-xl font-semibold tracking-wide text-blue-600 uppercase">Error 404</p>
      <h1 class="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">Oops! The page you're looking for isn't here.</h1>
      <p class="mb-5 text-base text-left text-gray-800 md:text-xl">You might have the wrong address, or the page may have moved.</p>
      <a href="/" class="w-full mb-2 btn btn-lg btn-light sm:w-auto sm:mb-0 shadow-lg">Back to homepage</a>
    </div>
    <div>
      <div class="w-full h-full p-2 bg-gray-200 rounded-lg shadow-xl">
        <img src="images/c6e08d2ae2.jpg"></img>
      </div>
    </div>
  </div>
</section>

  );
};

export default Notfound;