import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import "./Sphere.css"

const GreenSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Set alpha to true for transparent background
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5); // Set canvas width to 60%
    renderer.setClearAlpha(0); // Make the background transparent
    renderer.setPixelRatio( window.devicePixelRatio );
    container.appendChild(renderer.domElement);

    // Create a green sphere
    const geometry = new THREE.SphereGeometry(1, 20, 20);
    const material = new THREE.MeshNormalMaterial({wireframe:true  }); // Green color
    const sphere = new THREE.Mesh(geometry, material);
    // sphere.position.x = -2; // Adjust the position to the left
    scene.add(sphere);

    // Position the camera
    camera.position.y = 1.8;
    

    // Create OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = true;
    controls.enablePan = false;
    controls.enableZoom = false;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere
      // sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.005;

      controls.update(); // Update OrbitControls

      renderer.render(scene, camera);




    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth * 0.5;
      const newHeight = window.innerHeight * 0.5;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight); // Update canvas width
    };

    // window.addEventListener('resize', handleResize);

    const mediaQuery = window.matchMedia('(max-width: 1100px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
      renderer.setSize(window.innerWidth , window.innerHeight);
      camera.position.y = 3.5;
    }



    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
    <div style={{ display: 'flex',marginBottom:"50px" }} className='globe-outer'>
      <div style={{ width: '40%', position: 'relative'}} ref={containerRef} className='canva-globe'/>
      <div style={{ padding: '30px', width: "60%" }} className='d-flex justify-content-end content'>
        <p className='about-text' style={{marginRight:"9vw",fontSize:"16px",color:"white",textAlign:"justify"}}>Computer Society of India is a body of computer professionals in India, who wanted to share their ideas, passion and knowledge. The UPES branch of the Computer Society of India, UPES-CSI, was formed in 2010, and saw the motto for a forum to “CREATE, SHARE, and INNOVATE”. <br/><br/> UPES-CSI continued to organise several seminars, workshops, and training sessions, educating its youth with cutting-edge advances. This organisation strives to give the students access to the most recent technological knowledge, a range of creative activities, and the opportunity to network with eminent lecturers who specialise in various technologies.<br/> <br/>In the years succeeding its creation, UPES-CSI came to be recognised as one of the Best Student Chapters, acclaiming the zeal, passion and dedication of the team. UPES-CSI is an all-inclusive resource for technocrats looking for affordable advice. 

As of today, UPES-CSI has collaborated with geeksforgeeks, the biggest computer science portal for geeks in the world. Apart from collaborations, UPES-CSI also hosts its flagship events yearly, with the latest being Arena 2.0, Hackathon 7.0 and Yugmak ‘23.<br/><br/> These events cater to a group of individuals, ranging from gamers to technophiles. UPES-CSI also organises a yearly CSR to return to the community it grew from.
           </p>
      </div>
    </div>
    </>
  );
};



export default GreenSphere;
