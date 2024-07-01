import React from 'react';
import ProjectCardSection from './Services/projectcard'

const Projects = () => {
  return (
    <section id="#projects" className="py-20 bg-indigo-950">
     <p className="lg:mt-4 md:mt-2 mt-2 text-3xl text-left lg:px-[20rem]  md:px-[8rem]  px-[1rem] text-indigo-400" >MY Work</p>
          <h1 className="lg:mt-2 text-6xl font-bold text-left lg:px-[20rem]  md:px-[8rem]  px-[1rem] text-gray-50">Projects</h1>
          <p className='lg:mt-4 md:mt-2 mt-2  text-md lg:mt-4 md:mt-2 mt-2 text-gray-50 text-left text-indigo-400  lg:px-[20rem]  md:px-[8rem]  px-[1rem]'>As a proficient web developer, I bring a wealth of experience and expertise in crafting exceptional digital solutions. My journey in
              web development has equipped me with a robust understanding of JavaScript, HTML, and CSS, along with specialized proficiency in
              various modern frameworks such as React, Node.js, Tailwind CSS, Bootstrap, and Express.js. This diverse skill set allows me to deliver
              high-quality, scalable, and user-friendly web applications that meet the dynamic needs of clients and users alike.</p>
          <ProjectCardSection />
    </section>
  );
};

export default Projects;
