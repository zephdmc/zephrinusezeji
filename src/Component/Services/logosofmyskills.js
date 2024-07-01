import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SkillsSection = () => {
  // Dummy data for demonstration
  const companies = [
    {
      name: 'Company One',
      logoUrl: 'boostrap.jpg'
    },
    {
      name: 'Company Two',
      logoUrl: 'css.png'
    },
    {
      name: 'Company Three',
      logoUrl: 'exresjs.png'
    },
    {
      name: 'Company Four',
      logoUrl: 'html.jpg'
    },
    {
      name: 'Company Five',
      logoUrl: 'javascript.png'
      },
      {
        name: 'Company Five',
        logoUrl: 'Nodejs.png'
      },
      {
        name: 'Company Five',
        logoUrl: 'react.png'
      },
      {
        name: 'Company Five',
        logoUrl: 'tailwind.jpg'
        },
      
    {
      name: 'Company Six',
      logoUrl: 'mongodb.jpg'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="px-[16%] py-20 bg-indigo-950">
      <div className=" mx-auto px-4">
        <h1 className='text-left text-indigo-300 text-5xl font-bold'>My Stack</h1>
        <p className='text-indigo-600 text-3xl pb-[5%] font-semibold text-left'>100% Experience</p>
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="px-4 gradientq1 ">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-500 p-6  m-2 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={company.logoUrl}
                  alt={company.name}
                  className="max-w-full h-20 rounded-md"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SkillsSection;
