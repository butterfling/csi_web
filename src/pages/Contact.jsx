import React from "react";
import "./Contact.css"; // Update CSS file name
import Heading from "../Components/Heading/Heading";
// Import any necessary data here if needed

function ContactForm()  {
    function sendMessage(){}
    return (
      <div className="contact-form-container flex-column gap-5 pt-5" style={{ color: "white" }}>
        <Heading head="Contact Us" size="50px"></Heading>
        <div className="contact-content">
          <div className="contact-left">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.6944395247806!2d77.96429537556806!3d30.41641012473839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES!5e0!3m2!1sen!2sin!4v1693502612829!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="contact-right">
            <div className="contact-topic-text" style={{ color: "white" }}>Get in Touch</div>
            <p className="contact-description">
              For any queries contact us and we'll get back to you within 24
              hours.
            </p>
            <form action="/create">
              <div className="contact-input-box">
                <input id="uname" type="text" placeholder="Enter your name" />
              </div>
              <div className="contact-input-box">
                <input id="email" type="text" placeholder="Enter your email" />
              </div>
              <div className="contact-input-box contact-message-box">
                <input
                  id="message"
                  type="text"
                  placeholder="Enter your Message"
                />
              </div>
              <div className="contact-button">
                <input
                  style={{ color: "black" }}
                  type="button"
                  name="sendmsg"
                  value="Send Message"
                  onClick={sendMessage}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="cont-info d-flex align-items-start justify-content-center flex-wrap gap-5 p-3">
          <div className="d-flex align-items-center justify-content-center flex-column gap-4 " style={{maxWidth:"250px"}}>
         <div className="circle-blue"><i class="fa-solid fa-map-pin fa-xl"></i></div>
        <div style={{textAlign:"center"}}><b>Address: </b> SOCS, University of Petrolium and Energy Studies, Bidholi, Dehradun</div>
         </div>
         <div className="d-flex align-items-center justify-content-center flex-column gap-4" style={{maxWidth:"290px"}}>
         <div className="circle-blue"><i class="fa-solid fa-phone fa-xl"></i></div>
        <div style={{textAlign:"center"}}><b>Abhipriya Tyagi: </b>+91-8218566383 <br /><b>Aayushman Gusain: </b>+91-8958700375</div>
         </div>
         <div className="d-flex align-items-center justify-content-center flex-column gap-4" style={{maxWidth:"250px"}}>
         <div className="circle-blue"><i class="fa-solid fa-paper-plane fa-xl"></i></div>
        <div style={{textAlign:"center"}}><b>Email: </b>upes.csi@gmail.com</div>
         </div>
         <div className="d-flex align-items-center justify-content-center flex-column gap-4" style={{maxWidth:"250px"}}>
         <div className="circle-blue"><i class="fa-solid fa-earth-americas fa-xl"></i></div>
        <div style={{textAlign:"center"}}><b>Website: </b>upescsi.in</div>
         </div>
        </div>
      </div>
    );
  }


export default ContactForm;
