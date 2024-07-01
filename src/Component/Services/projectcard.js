import React, { useEffect } from 'react';
import { Tilt } from 'react-tilt';
import AOS from 'aos';

const Card = ({ image, title, description, tools1, tool2, tools3, link }) => (
  <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
    <div  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="Tilt-inner p-5 bg-indigo-950 rounded-lg gradientq1 shadow-lg shadow-indigo-500/50 transform transition-transform duration-300 hover:shadow-xl hover:shadow-indigo-500/50">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-indigo-300 text-left mb-4">{description}</p>
                
                    <div className='mx-2 mb-2'><p>
                        <strong className='mx-2 text-indigo-500'>{tools1}</strong>
                        <strong className='mx-2 text-pink-600'>{tool2}</strong>
                        <strong className='mx-2 text-blue-500'>{tools3}</strong>
                    </p></div><a href={link} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded hover:bg-pink-600">View</a>
      </div>
    </div>
  </Tilt>
);

const ProjectCardSection = () => {
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


  const cards = [
    {
      image: 'mghso.jpg',
      title: 'School Web Application',
          description: 'Our school management system is designed to streamline and enhance the administrative processes within our educational institution. This robust platform integrates a wide range of functionalities to ensure efficient and effective management of school operations,',
          tools1: '#Tailwind.',
          tool2: '#React',
          tools3: '#RestAPI',
          link: 'https://mghso.com.ng'
    },
    {
      image: 'prisericsmile.jpg',
      title: 'Dentistry website',
        description: 'Our dentistry management system is designed to streamline and enhance the administrative processes within your dental practice. This robust platform integrates a wide range of functionalities to ensure efficient and effective management of dental operations Appointment booking',
        tools1: '#Javascript',
          tool2: '#Html',
        tools3: '#css',
        link: 'https://zephdmc.github.io/prisericdentistry/Home.html'
    },
    {
      image: 'myportfolio.jpg',
      title: 'Portfolio Website',
        description: 'Our portfolio management system is designed to streamline and enhance the presentation and organization of your professional work. This robust platform integrates a wide range of functionalities to ensure efficient and effective management of your portfolio: Project Showcase,Responsive Design',
        tools1: '#Tailwind.',
          tool2: '#React',
        tools3: '#RestAPI',
        link: 'https://zephrinusezeji.wav.com'
    },
    {
      image: 'danprofit.jpg',
      title: 'Portfolio Webite',
      description: 'Our portfolio management system is designed to streamline and enhance the presentation and organization of your professional work. This robust platform integrates a wide range of functionalities to ensure efficient and effective management of your portfolio: Project Showcase,Responsive Design',
      tools1: '#Tailwind.',
          tool2: '#React',
        tools3: '#RestAPI',
        link: 'https://danprofitpips.ng/'
    },
  ];

  return (
    <section className="py-12 bg-indigo-950">
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCardSection;
