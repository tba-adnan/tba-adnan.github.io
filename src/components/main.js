import React from "react";


export default class Main extends React.Component {
    constructor(){
        super();
    }

render() {

    return (
        
<div class="hero-section pt-[120px] lg:pt-[40px] pb-[5px] sm:pt-[80px]">
<section class="bg-white dark:bg-gray-900 pb-2">
    <div class="grid max-w-screen-xl px-4 py-12 pb-2 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-1xl mb-4 text-3xl font-sans tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">👋 Hi, i'm Adnane! </h1>
            <p class="max-w-2xl mb-7 font-light text-gray-500 lg:mb-3 md:text-lg lg:text-xl dark:text-gray-400 font-sans ">
            Full-stack Web & Mobile developer with a background in Cyber Security, specializing in building secure applications with a range of tech and programming languages. Experienced in user interface, server-side logic, and database management.
            With a deep understanding of cybersecurity best practices. 
            delivering high-quality and secure solutions for clients.</p>
            
            <div class="flex">
            <form action="mailto:tebbaa.adnane.dev@gmail.com" className="font-sans">
            <button type="submit" value="mailto:tebbaa.adnane.dev@gmail.com" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 shadow-2xl">Get In Touch</button>
            </form>
            <form action="https://www.linkedin.com/in/adnane-tba/">
            <button class="btn btn-outline-primary" href="google.com">See resume</button>
            </form>
            </div>
      

         </div>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="images/ea036822.png" alt="mockup"></img>
        </div>                
    </div>
</section>
</div>

    );
}


}