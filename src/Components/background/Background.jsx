import React, { useRef } from 'react';
import './background.css';
import bg from '../Images/bg-video.mp4'
import { useEffect } from 'react';

const VideoBackground = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
 
  window.addEventListener('l',()=>{
    playVideo()
  })

  return (
    <div className="video-background " >
      <video ref={videoRef} loop muted autoPlay={true} preload={true} data-preload="true" playsInline style={{position:"absolute"}}>
      {/* <source src="videos/2.0-Welcome-to-DISTRO_1 (1).ogv" type="video/webm"/> */}
        <source src={bg} type="video/mp4" />
        {/* Add additional <source> elements for other formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="content w-100" style={{zIndex:"101"}}>
        <div className='container-fluid csi-heading' style={{textAlign:"center"}}>
        <h1>COMPUTER SOCIETY OF INDIA</h1>
        <span className='mt-2 sub-heading'>CREATE &nbsp;&nbsp;|&nbsp;&nbsp; SHARE &nbsp;&nbsp;|&nbsp;&nbsp; INNOVATE</span>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
