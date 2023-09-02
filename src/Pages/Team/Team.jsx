import React from "react";
import "./Team.css";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import i1 from "../Team/Teams Image/Abhipriya Tyagi.png"
import i2 from "../Team/Teams Image/aayushman gussain.png"
import i3 from "../Team/Teams Image/Devashish Sharma (2).png"
import i4 from "../Team/Teams Image/Parth Nautiyal.png"
import i5 from "../Team/Teams Image/Sahaj Somvanshi_.png"
import i6 from "../Team/Teams Image/Aryan Deopa.png"
import i7 from "../Team/Teams Image/dakshi aggarwal.png"
import i8 from "../Team/Teams Image/Harsh Raturi.png"
import i9 from "../Team/Teams Image/ishika punhani.png"
import i10 from "../Team/Teams Image/mehak.png"
import i11 from "../Team/Teams Image/Very_sorry_but_could_this_be_cropped__Don_t_wanna_ruin_the_quality_so_didn_t_upload_cropped_one-removebg-preview.png"
import i12 from "../Team/Teams Image/rimjhim gupta.png"
import i13 from "../Team/Teams Image/Ravinesh Kumar Yadav '.png"
import i14 from "../Team/Teams Image/akshat nigam.png"
import i15 from "../Team/Teams Image/rasya mihir.png"
import i16 from "../Team/Teams Image/archi.png"
import i17 from "../Team/Teams Image/Vamika Mahajan (1).png"
import i18 from "../Team/Teams Image/hsm.png"
import i19 from "../Team/Teams Image/anushka chamoli.png"
import i20 from "../Team/Teams Image/shaivi sinha.png"
import i21 from "../Team/Teams Image/pratham kandari.png"
import i22 from "../Team/Teams Image/Deepali Gupta.png"
import i23 from "../Team/Teams Image/pranjal tripathi.png"
import i24 from "../Team/Teams Image/mitanshi.png"
import i25 from "../Team/Teams Image/anshul.png"
import i26 from "../Team/Teams Image/adit.png"
import { FaLinkedin } from "react-icons/fa";
import Heading from '../../Components/Heading/Heading';

 
const Team = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  // create a array of name of team member and their designation
  const [team, setTeam] = useState([
    {
      image: i1,
      name: "Abhipriya Tyagi",
      designation: "President",
    },
    {
      image: i2,
      name: "Aayushman Gusain",
      designation: "Vice President",
    },
    {
      image: i3,
      name: "Devashish Sharma",
      designation: "General Secretary",
    },
    {
      image: i4,
      name: "Parth Nautiyal",
      designation: "Secretary",
    },
    {
      image: i5,
      name: "Sahaj Somvanshi",
      designation: "Treasurer",
    },
    {
      image: i6,
      name: "Aryan Deopa",
      designation: "Director",
    },
    {
      image: i7,
      name: "Dakshi Aggarwal",
      designation: "Director",
    },
    {
      image: i8,
      name: "Harsh Raturi",
      designation: "Director",
    },
    {
      image: i9,
      name: "Ishika Punhani",
      designation: "Director",
    },
    {
      image: i10,
      name: "Mehak Aggarwal",
      designation: "Director",
    },
    {
      image: i11,
      name: "Divyansh Jha",
      designation: "Joint Secretary",
    },
    {
      image: i12,
      name: "Rimjhim Gupta",
      designation: "Working Committee Head",
    },
    {
      image: i13,
      name: "Ravinesh Yadav",
      designation: "Internal Operations Head",
    },
    {
      image: i14,
      name: "Akshat Nigam",
      designation: "Associate Treasurer",
    },
    {
      image: i15,
      name: "Rasya Mihir",
      designation: "External PR Head",
    },
    {
      image: i16,
      name: "Archi Garg",
      designation: "Internal PR Head",
    },
    {
      image: i17,
      name: "Vamika Mahajan",
      designation: "Design & VFX Head",
    },
    {
      image: i18,
      name: "Harman Malhotra",
      designation: "Associate Design & VFX Head",
    },
    {
      image: i19,
      name: "Anushka Chamoli",
      designation: "Editor In Chief",
    },
    {
      image: i20,
      name: "Shaivi Sinha",
      designation: "Events Head",
    },
    {
      image: i21,
      name: "Pratham Kandari",
      designation: "Technical Head",
    },
    {
      image: i22,
      name: "Deepali Gupta",
      designation: "Associate Technical Head",
    },
    {
      image: i23,
      name: "Pranjal Tripathi",
      designation: "Registration Head",
    },
    {
      image: i26,
      name: "Adit Jain",
      designation: "Associate Registrations Head",
    },
    {
      image: i24,
      name: "Mitanshi Jain",
      designation: "Management & Records Head",
    },
    {
      image: i25,
      name: "Anshul Ghildiyal",
      designation: "Photography Head",
    },
  ]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Add this line

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="our-team">
     <Heading head="Team UPES-CSI" size="50px"></Heading>
     <Heading head="Our Faculty" size="30px"></Heading>
     <Heading head="Student Body" size="30px"></Heading>
      <div className="d-flex align-items-center justify-content-center flex-wrap" style={{placeItems:"center"}}>
        {team.map((member, index) => (
          <div
          onClick={onOpenModal}
          style={{cursor:"pointer"}}
            key={index}
            className={`team-member  p-4  bg-white shadow-md  ${
              hoveredIndex === index ? "hovered" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
          
        
            <div className="img  ">
       
              <div className="img2">

              <img
                className=" mx-auto"
                src={member.image}
                alt="team"
              />
              </div>
          
              <div className="info text-left mt-2 d-flex align-items-center">
              <FaLinkedin className="white linked mr-4 ml-2" color="white" />
              <div>
                <h3 className="text-xl font-semibold text-gray-100">{member.name}</h3>
                <p className="text-gray-400">{member.designation}</p>
                </div>
              </div>
             
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={onCloseModal} center classNames={{
      }}>
       <div className="container-fluid team-modal d-flex align-items-center justify-content-center gap-5">
        <ul>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
        <ul>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
       </div>
      </Modal>
    </div>
  );
};

export default Team;