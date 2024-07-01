import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="flex justify-center items-center px-4 py-12">
      <div className="relative w-full max-w-4xl">
        {/* Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-800 hidden sm:block"></div>
        
        {/* Cards */}
        <div className="flex flex-col space-y-8 sm:space-y-16">
          {/* Card 1 */}
          <div className="relative sm:flex sm:items-center">
            <div className="hidden sm:block sm:absolute sm:left-1/2 sm:transform sm:-translate-x-full sm:w-1 sm:h-4 bg-gray-300"></div>
            <div className="bg-indigo-950 gradientq1 shadow-lg p-6  rounded-lg w-full sm:w-2/3 sm:ml-auto sm:mr-0">
                          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Imo state Data Managament Center</h3>
                          <p className='font-bold'>Network Administrator</p>
                          <p className="text-indigo-400 text-left"> I implement security measures to protect the website from cyber threats, such as installing and updating antivirus
                              software, managing user access controls, and performing regular security audits. They work
                              closely with web developers and IT teams to troubleshoot and resolve any network issues that may affect the website's performance.</p>
                          <p className='text-right text-lg text-indigo-500 font-semibold'>10th Oct, 2020  - Present</p>
                          </div>
                    
          </div>

          {/* Card 2 */}
          <div className="relative sm:flex sm:items-center">
            <div className="hidden sm:block sm:absolute sm:left-1/2 sm:transform sm:translate-x-0 sm:w-1 sm:h-4 bg-gray-300"></div>
            <div className="bg-indigo-950 gradientq1 shadow-lg p-6 rounded-lg w-full sm:w-2/3 sm:ml-0 sm:mr-auto">
                          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Freelance</h3>
                          <p className='font-bold'>Graphics Design</p>

                          <p className="text-indigo-400 text-left">I use tools like Adobe Creative Suite (Photoshop, Illustrator, XD, etc.) to craft high-quality graphics, icons,
                              banners, and other visual elements. They collaborate closely with web developers to ensure that their designs are implemented accurately and function
                              seamlessly across different devices and screen sizes. Additionally,
                              they may be involved in creating animations, infographics, and other multimedia content to enrich the website's appeal</p>
                          <p className='text-right text-lg text-indigo-500 font-semibold'>18th Feb, 2019  - Present</p>            </div>
          </div>

          {/* Card 3 */}
          <div className="relative sm:flex sm:items-center">
            <div className="hidden sm:block sm:absolute sm:left-1/2 sm:transform sm:-translate-x-full sm:w-1 sm:h-4 bg-gray-300"></div>
            <div className="bg-indigo-950 gradientq1 shadow-lg p-6 rounded-lg w-full sm:w-2/3 sm:ml-auto sm:mr-0">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Collysnatural Squeez</h3>
                          <p className='font-bold'>Digital Marketing</p>
                          <p className="text-indigo-400 text-left"> I create and manage campaigns that are tailored to attract, convert, and retain customers.
                              This includes crafting compelling content,
                              designing advertisements, and managing social media profiles to build a strong online presence. They also use analytics tools to track
                              the performance of their campaigns, measure key metrics (such as traffic, engagement, and conversion rates), and gain insights into what strategies
                              are working or need improvement. Based on this data, they make informed decisions to optimize campaigns for better results.
                          </p>
                          <p className='text-right text-lg text-indigo-500 font-semibold'>18th Aug, 2022  - 1st Jan, 2024</p> 
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative sm:flex sm:items-center">
            <div className="hidden sm:block sm:absolute sm:left-1/2 sm:transform sm:translate-x-0 sm:w-1 sm:h-4 bg-gray-300"></div>
                      <div className="bg-indigo-950 gradientq1 shadow-lg p-6 rounded-lg w-full sm:w-2/3 sm:ml-0 sm:mr-auto">
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Mercy Girls' High School Okigwe</h3>
            <p className='font-bold'>Full Stack development</p>
                          <p className="text-indigo-400 text-left"> I play a crucial role in the development, maintenance, and enhancement of a mghso.com.ng, ensuring it
                              is robust, scalable, and delivers a superior user experience. I made use of front-end technologies like HTML, CSS, and JavaScript.
                              I use frameworks and libraries such as React to create responsive and interactive user interfaces.
                              I ensure that the website is visually appealing and user-friendly, optimizing it for different devices and screen sizes.
                          </p>
                          <p className='text-right text-lg text-indigo-500 font-semibold'>20th Feb, 2023  - Present</p> 
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
