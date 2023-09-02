import React from "react";
import "./style.css"
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
const L_Sidebar = () => {
  return (
    <div className="l_sidebar fixed h-screen md:w-26 bg-black bg-opacity-50 sm:w-20 hidden sm:block d-flex right-0 " >
      <div style={{ position: "relative", display: "flex", justifyContent: "center", height: "100%", width: "100%", alignItems: "center" }}>
        <div className="">
          <a href="https://instagram.com/upescsi?igshid=MzRlODBiNWFlZA==">
            <FaInstagram className="social-link white, my-10 mx-auto  w-7 h-auto" color="white" />
          </a>
          <a href=" https://twitter.com/upescsi?t=1fOIJJfJp1H_R1hsg9bmbQ&s=08">
          <i className="fa-brands fa-x-twitter social-link " style={{color:"white",fontSize:"1.75rem"}}></i>
            {/* <FaTwitter className="social-link white, my-10  mx-auto w-7 h-auto" color="white" /> */}
          </a>
          <a href="https://m.facebook.com/upescsi">
            <FaFacebook className="social-link white, my-10  mx-auto w-7 h-auto" color="white" />
          </a>
          <a href="https://www.linkedin.com/company/computer-society-of-india-upes/">
            <FaLinkedin className="social-link white, my-10  mx-auto w-7 h-auto" color="white" />
          </a>
          <a href="https://youtube.com/@UPESCSIOfficial?si=k3t6NWMvkzVyTQF7">
            <FaYoutube className="social-link white, my-10  mx-auto w-7 h-auto" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default L_Sidebar;
