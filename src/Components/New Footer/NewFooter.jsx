import React from 'react'
import './NewFooter.css'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function NewFooter() {
  return (
    <div className='container-fluid mt-5 py-4' style={{backgroundColor:"#2b3349"}}>
<div className="d-flex justify-content-center align-items-center flex-column gap-4 new-footer-outer">
<div className="d-flex justify-content-center align-items-center gap-4 logos-group">
          <a href="https://instagram.com/upescsi?igshid=MzRlODBiNWFlZA==">
            <FaInstagram className="social-link white, w-7 h-auto" color="white" />
          </a>
          <a href=" https://twitter.com/upescsi?t=1fOIJJfJp1H_R1hsg9bmbQ&s=08">
          <i className="fa-brands fa-x-twitter social-link " style={{color:"white",fontSize:"1.75rem"}}></i>
            {/* <FaTwitter className="social-link white, w-7 h-auto" color="white" /> */}
          </a>
          <a href="https://m.facebook.com/upescsi">
            <FaFacebook className="social-link white, w-7 h-auto" color="white" />
          </a>
          <a href="https://www.linkedin.com/company/computer-society-of-india-upes/">
            <FaLinkedin className="social-link white, w-7 h-auto" color="white" />
          </a>
          <a href="https://youtube.com/@UPESCSIOfficial?si=k3t6NWMvkzVyTQF7">
            <FaYoutube className="social-link white, w-7 h-auto" color="white" />
          </a>
        </div>
    <p style={{color:"white",fontSize:"14px"}}>Copyright 2023 © UPES-CSI</p>
</div>
    </div>
  )
}
