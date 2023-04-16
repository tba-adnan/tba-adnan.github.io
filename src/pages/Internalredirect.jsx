import React, { Component } from 'react';

class Internalredirect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: 45,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ countdown: prevState.countdown - 1 }));
    }, 1000);

    this.timer = setTimeout(() => {
      clearInterval(this.interval);
      window.location.href = 'https://www.linkedin.com/in/adnane-tba/';
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div>
        <section class="px-4 py-32 pt-[200px] mx-auto max-w-7xl">
          <div class="w-full mx-auto lg:w-1/3">
         
            <a href="#"  class="flex items-center">
              <span class="sr-only">Redirect...</span>
            </a>
            <p class="mt-5 mb-3 text-xl font-bold text-black md:text-2xl">
              You are being redirected...
            </p>
            <p class="mb-3  font-medium text-black">
              You are being redirected to my LinkedIn. 
              <br></br>
              Unfortunately, you cannot
              download my resume from this page for Privacy and Security reasons. Please visit my LinkedIn
              profile to view my full professional profile and learn more about
              my qualifications.
              <br />
              <br />
              If you would like a copy of my resume, please feel free to send me
              a direct message on LinkedIn and I will be happy to provide it to
              you.
              <br />
              Thank you for your understanding. 
            </p>
            <p class=" font-medium text-blue-600 text-2xl">
              Redirecting in {this.state.countdown}s...
          
              <div className="pt-7">
            <a href="/" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
<span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
<span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white font-sans">Back</span>
</a>
            </div>
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Internalredirect;
