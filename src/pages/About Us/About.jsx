import React from 'react'
import Globe from "../../Components/Globe/Sphere"
import Slider from '../../Components/Slider/Slider';
import Review from '../../Components/Testimonials/Review';
import Story from '../../Components/Our Stories/TestimonialSlider'
import Heading from '../../Components/Heading/Heading';



const About = () => {

  return (
    <div className='py-5' style={{ textAlign: "center", color: "white" }}>
      <Heading head="About Us" size="50px" />
      <Globe></Globe>

      <Review />


      <Slider />
      <Story></Story>

    </div>

  );
}

export default About