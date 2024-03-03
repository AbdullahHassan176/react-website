import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/pexels-cottonbro-studio-6153354.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer' 
      >
        <h1> Unamani AI </h1>
        <p> Innovate. Integrate. Illuminate. </p>
        <Link to ='/contact'>
            <button> CONTACT US NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
