import { useState, useEffect } from 'react';
// Testimonial data
const testimonials = [
  { 
    name: 'Eva Sawyer', 
    role: 'CEO',
    image: '/image1.png',
    testimonial: 'Testimonial 1'
  },
  {
    name: 'Katey Topaz',
    role: 'Developer', 
    image: '/image2.png',
    testimonial: 'Testimonial 2'
  },
  // other testimonials...
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(prev => (testimonials.length + prev + 1) % testimonials.length);
  }

  const prevSlide = () => {
    setCurrent(prev => (testimonials.length + prev - 1) % testimonials.length);
  }

  return (
    <div className="testimonials">
      <TestimonialSlide current={current} />
      
      <div className="controls">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>  
      </div>
    </div>
  );
}

function TestimonialSlide({ current }) {
  const { name, role, image, testimonial } = testimonials[current];
  
  return (
    <>
     <div><h2 style={{fontSize:"30px", fontWeight:"bold"}}>Our Stories</h2></div>
    <div className="slide ">
      <img src={image} alt={name} />

      <div className="text">
        <p>{testimonial}</p>
        <h3>{name}</h3>
        <p className="role">{role}</p>
      </div>
    </div>
       
        </>
  );
}

export default Testimonials;