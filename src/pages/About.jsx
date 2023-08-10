const About = () => {

    return (
      <div className="hero-section pt-[60px] lg:pt-[40px] pb-[5px] sm:pt-[80px]">

  <section
    class="text-gray-600 border-b dark:border-gray-700 bg-white dark:text-gray-400 dark:bg-dark"
  >
    <div
      class="container max-w-screen-lg mx-auto md:items-start md:text-left items-center py-32 pb-12 flex flex-col px-5"
    >
      <h1
        class="dark:text-gray-200 text-left text-3xl font-medium title-font text-gray-900 font-sans"
      >
        About Me : 
      </h1>
      <span class="block mt-1 w-10 h-1 bg-blue-700"></span>

      <div class="mt-6 flex md:flex-row space-x-14 flex-col justify-bteween font-sans">
        <div class="flex-1">
          <p class="leading-7 font-sans font-face-nuni">
          My name is Adnane Tebbaa, and I am a Full Stack Web Developer and Android Developer with expertise in Python, Javascript, PHP, and Kotlin. I also have a strong background in Cyber Security. I bring both youthful enthusiasm and a wealth of technical knowledge to any project I work on.
            <br></br>
            <br class="block mt-2.5" />
            As a full-stack developer with a strong background in cyber security, I have a unique combination of technical and security expertise that enables me to develop highly robust and secure applications. I'm always exploring new technologies and programming languages to enhance my skillset and take on greater development challenges. From front-end user interface design to back-end server-side logic and database management, I'm capable of handling all aspects of the development process. My deep understanding of cyber security best practices and my commitment to ensuring that the applications I build are secure and protected against potential threats sets me apart. Whether I'm working on a large-scale project for a corporate client or a small-scale project for a startup, I am dedicated to delivering high-quality, secure solutions.
          </p>
          <div class="mt-8">
            <h5
              class="text font-semibold text-gray-900 dark:text-gray-300 mb-4 font-sans"
            >
              For any business-related queries, feel free to reach out to me at :
            </h5>
            <ul class="mb-6 flex flex-col sm:text-left space-y-2">
              <li>
                <span class="text-gray-600 dark:text-blue-700 font-sans">
                ✔️ tebbaa.adnane.dev@gmail.com
                </span>
              </li>
              <li>
                {/* <span
                  class="bg-green-100 text-blue-700 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span class="text-gray-600 dark:text-gray-400">
                  +212-my phone (to addsignalapp)
                </span> */}
              </li>
            </ul>
            <h5
              class="text font-semibold text-gray-900 dark:text-gray-300 mb-6 font-sans"
            >
              Or you can find me elsewhere :
            </h5>
            <span class="flex space-x-6">
              <a
                target="_blank"
                href="https://github.com/tba-adnan"
                class="ml-3 hover:text-black"
              >
                <svg class="h-6 w-6" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/tba-adnane/"
                class="ml-3 hover:text-blue-800"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
            {/* Button */}
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
        
        <div class="hidden md:flex">
          {/* <img class="object-cover h-64" alt="hero" src="/about-hero.svg" /> */}
        </div>
      </div>
    </div>
  </section>

    
      </div>
    );
  };
  
  export default About;