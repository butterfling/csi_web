import React, { useEffect, useRef, useState } from 'react';
import './style.css'; // Import the CSS file
import img1 from './profile-image-1.png'
import img2 from './profile-image-2.png'
import img3 from './profile-image-3.png'
import img4 from './profile-image-4.png'
import Heading from '../Heading/Heading';
const testimonials = [
  
    {
      name: "Eva Sawyer",
      job: "CEO, Fashworks",
      image: img1,
      testimonial:
        "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
    },
    {
      name: "Katey Topaz",
      job: "Developer, TechCrew",
      image: img2,
      testimonial:
        "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
    },
    {
      name: "Jae Robin",
      job: "UI Designer, Affinity Agency",
      image: img3,
      testimonial:
        "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
    },
    {
      name: "Nicola Blakely",
      job: "CEO,Zeal Wheels",
      image: img4,
      testimonial:
        "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    },
  ];

const TestimonialSlider = () => {

    const contat=useRef()
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    displayTestimonial();
  });

  const displayTestimonial = () => {
    if(contat.current)
    {
    const testimonialContainer = contat.current;

    testimonialContainer.innerHTML = `
      <p>${testimonials[currentSlide].testimonial}</p>
      <img src=${testimonials[currentSlide].image} alt="${testimonials[currentSlide].name}">
      <h3>${testimonials[currentSlide].name}</h3>
      <h6>${testimonials[currentSlide].job}</h6>
    `;
    }
  };

  return (
    <div className='mt-5 pt-5'>
       <Heading head="Our Stories" size="30px"></Heading>
      <div className="wrapper2 mt-4">
       
        <div className="testimonial-container" id="testimonial-container" ref={contat}></div>
        <button id="prev" onClick={prevSlide}>&lt;</button>
        <button id="next" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
