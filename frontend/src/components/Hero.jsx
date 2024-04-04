import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          RP Medical Hospital Management System is a comprehensive software solution designed to streamline and optimize the operations of medical facilities under the RP Medical network. This advanced system offers a wide range of features tailored to meet the diverse needs of healthcare professionals, administrators, and patients alike. From efficient patient registration and appointment scheduling to seamless electronic medical records management and billing, RP Medical Hospital Management System empowers healthcare providers to deliver superior patient care while improving overall efficiency and productivity. With its user-friendly interface and robust functionality, RP Medical Hospital Management System is the cornerstone of modern healthcare delivery within the RP Medical ecosystem.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;