import { Carousel } from '3d-react-carousal';
import './slider.css'
import img from '../Gallery_Images/1.jpeg'
import img1 from '../Gallery_Images/2.jpeg'
import img2 from '../Gallery_Images/3.jpeg'
import img3 from '../Gallery_Images/4.jpeg'
import img4 from '../Gallery_Images/5.jpeg'


const slider = () => {

  


  let slides = [
    <img src={img} alt="1" />,
    <img src={img1} alt="2" />,
    <img src={img2} alt="5" />,
    <img src={img3} alt="4" />,
    <img src={img4} alt="5" />];

  return (
    <div>
      <h2 className='mt-5 pt-5 mb-4' style={{ fontSize: '30px', fontWeight: '600' }}>Gallery</h2>
      <Carousel slides={slides} autoplay={true} interval={5000} />
    </div>
  );
};


export default slider;