import React from 'react';
import FeaturesSection from './Services/WorkSection';
import SkillsSection from './Services/logosofmyskills';

const Work = () => {
  return (
      <section id="work" className="py-20 bg-indigo-950">
     <p className="lg:mt-4 md:mt-2 mt-2 text-2xl text-left lg:px-[20rem]  md:px-[8rem]  px-[1rem] text-indigo-400" >WHAT I HAVE DONE SO FAR</p>
          <h1 className="lg:mt-2 text-6xl font-bold text-left lg:px-[20rem]  md:px-[8rem]  px-[1rem] text-gray-50">Work Experience</h1>
          <FeaturesSection />
          <SkillsSection />
    </section>
  );
};

export default Work;
