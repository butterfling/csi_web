import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function card() {
  return
}

function Review() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    arrows:false,
    // cssEase: "linear"

    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };
  return (<>
    <div className='mt-5'><h2 style={{fontSize:"30px", fontWeight:"bold"}}>Testimonials</h2></div>
    <div className='container out-out-container mt-4' style={{ maxWidth: "1100px" }}>
      <Slider {...settings}>
        <div>
          <figure className="snip1390 mx-auto">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" className="profile" />
            <figcaption>
              <h2>Eleanor Crisp</h2>
              <h4>UX Design</h4>
              <blockquote>Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!</blockquote>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="snip1390 mx-auto"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" className="profile" />
            <figcaption>
              <h2>Sue Shei</h2>
              <h4>Public Relations</h4>
              <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</blockquote>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="snip1390 hover mx-auto"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
            <figcaption>
              <h2>Gordon Norman</h2>
              <h4>Accountant</h4>
              <blockquote>Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I think my cerebellum has just fused. </blockquote>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="snip1390 hover mx-auto"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
            <figcaption>
              <h2>Gordon Norman</h2>
              <h4>Accountant</h4>
              <blockquote>Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I think my cerebellum has just fused. </blockquote>
            </figcaption>
          </figure>
        </div>
      </Slider>
    </div>
    </>
  );
}




export default Review;
