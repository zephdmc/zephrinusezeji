import React, { useEffect } from 'react';
import AOS from 'aos';
const Hero = () => {

    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 800, // values from to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });

    }, []);

  return (
      <section id="hero"       className="h-screen bg-cover bg-center sm:mt-[10rem] md:mt-2  lg:mt-2 bg-no-repeat flex flex-col items-center justify-center text-white" 
          style={{ backgroundImage: "url('/big.jpg')" }}>
   
      <h1 className="lg:text-8xl md:text-8xl  text-5xl  font-bold" data-aos="fade-up"
     data-aos-duration="3000">Hi, i'm <strong className='text-indigo-400'>Zephrinus</strong></h1>
      <p className="mt-4 text-xl mx-[10%]" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
              data-aos-offset="0">I develop Websites, Graphics, Create Contents, Digital Marketing and Video Editings</p>
          <img src='profileimage1.jpg' alt='zeph_Dp' className='rounded-full lg:h-[43%] lg:w-[25%] md:h-[30rem] md:w-[25rem] h-[20rem] w-[20rem] shadow-lg shadow-indigo-500/50 border-[1px] border-pink-400 mt-6' />
          <div className="flex justify-center mt-4">
      <a
        href="/Zeph_CV_v5.pdf"  // Path to your CV file in the public folder
        download
        className="p-4 m-4 bg-pink-500 hover:text-white hover:bg-black rounded-full"
      >
        Download CV
      </a>
    </div>    </section>
  );
};

export default Hero;
