import React, { useEffect } from 'react';
import AOS from 'aos';

const About = () => {
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
      <section id="about" className="py-20 bg-indigo-950 ">
          
      <h2 className="text-3xl font-bold text-left lg:px-[20rem]  md:px-[8rem]  px-[1rem] text-indigo-500">INTRODUCTION</h2>
          <h1 className="lg:mt-4 md:mt-2 mt-2 text-6xl font-bold text-left lg:px-[20rem]  md:px-[8rem]  px-[1rem] text-gray-50">Overview</h1>
          <p className='lg:mt-4 md:mt-2 mt-2  text-md lg:mt-4 md:mt-2 mt-2 text-gray-50 text-left text-indigo-400  lg:px-[20rem]  md:px-[8rem]  px-[1rem]'>As a proficient web developer, I bring a wealth of experience and expertise in crafting exceptional digital solutions. My journey in
              web development has equipped me with a robust understanding of JavaScript, HTML, and CSS, along with specialized proficiency in
              various modern frameworks such as React, Node.js, Tailwind CSS, Bootstrap, and Express.js. This diverse skill set allows me to deliver
              high-quality, scalable, and user-friendly web applications that meet the dynamic needs of clients and users alike.</p>
          <div className='grid md:grid-cols-4  lg:gap-8 gap-4  lg:mt-6 md:mt-4 mt-4 md:mx-[5%] mx-[15%]  text-indigo-300  lg:px-[20rem]  md:px-[8rem] px-[1rem]'>
              <div  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='shadow-md Shadow-indigo-500 border-2  gradientq  bg-gradient-to-r from-indigo-950 via-indigo-600 to-indigo-950'>
                  <div>
                      <img src='web.png' className='text-indigo-400  h-[8rem] w-[8rem] mx-auto my-auto' alt='web.png' style={{ 
          filter: 'invert(46%) sepia(16%) saturate(7536%) hue-rotate(234deg) brightness(101%) contrast(101%)'
        }} />
                  </div>
                  <div>
                    <h2 className='text-indigo-400 text-3xl font-bold'> Website development </h2> 
                  </div>
              </div>


              <div  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='shadow-md Shadow-indigo-500 border-2  gradientq  bg-gradient-to-r from-indigo-950 via-indigo-600 to-indigo-950'>
                  <div>
                      <img src='graphy.png' className='text-indigo-400  h-[8rem] w-[8rem] mx-auto my-auto' alt='web.png' style={{ 
          filter: 'invert(46%) sepia(16%) saturate(7536%) hue-rotate(234deg) brightness(101%) contrast(101%)'
        }} />
                  </div>
                  <div>
                    <h2 className='text-indigo-400 text-3xl font-bold'>Graphics Design </h2> 
                  </div>
              </div>

              <div  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='shadow-md Shadow-indigo-500 border-2  gradientq  bg-gradient-to-r from-indigo-950 via-indigo-600 to-indigo-950'>
                  <div>
                      <img src='content.png' className='text-indigo-400 h-[8rem] w-[8rem] mx-auto my-auto' alt='web.png' style={{ 
          filter: 'invert(46%) sepia(16%) saturate(7536%) hue-rotate(234deg) brightness(101%) contrast(101%)'
        }} />
                  </div>
                  <div>
                    <h2 className='text-indigo-400 text-3xl font-bold'> Content Creator </h2> 
                  </div>
              </div>


              <div  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='shadow-md Shadow-indigo-500 border-2  gradientq  bg-gradient-to-r from-indigo-950 via-indigo-600 to-indigo-950  '>
                  <div>
                      <img src='digital.png' className='text-indigo-400  h-[8rem] w-[8rem] mx-auto my-auto' alt='web.png' style={{ 
          filter: 'invert(46%) sepia(16%) saturate(7536%) hue-rotate(234deg) brightness(101%) contrast(101%)'
        }} />
                  </div>
                  <div>
                    <h2 className='text-indigo-400 text-3xl font-bold'> Video Editing </h2> 
                  </div>
              </div>
          </div>

    </section>
  );
};

export default About;
