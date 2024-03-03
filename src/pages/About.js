import React from 'react';
import AboutImage from "../assets/pexels-google-deepmind-18069157.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className='about' style={{ backgroundImage: `url(${AboutImage})` }}>
      <div className='aboutBottom'>
        <h1> Our Story</h1>
        <p>
            Unamani AI is AI consultancy, South African-based, although we operate globally. 
            We are at the forefront of AI innovation, a visionary think tank crafting solutions for 21st-century challenges. 
            Founded in 2021, our team of specialists have created an arsenal cutting-edge tools, addressing social, economic, health, political, and environmental complexities. 
            With a holistic approach and a trailblazing AI arsenal, we redefine industries and shape a transformative future. 
            Join us in building a tomorrow where AI is not just a technology but a force for extraordinary change
        </p>
      </div>
    </div>
  );
}

export default About;
