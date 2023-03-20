import React from "react";
import "./Services.css";
import heartemoji from "../../Images/heartemoji.png";
import glasses from "../../Images/glasses.png";
import humble from "../../Images/humble.png";
import Resume from './Resume.pdf'
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { useContext } from 'react';
import {motion} from "framer-motion"




const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };


  return (
    <div className="services" id="Service">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Work Experience</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          ipsum is simpley dummy text of printing
        </span>
      <a href={Resume} download>
      <button className="button s-button">Download CV</button>

      </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
      <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
        
          <Card 
            emoji={heartemoji}
            heading={"Design"}
            detail={"figma,sketch,photoshop"}
           
          />
        
       
        </motion.div>
      
          {/* Second div */}
          <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >



            <Card 
              emoji={glasses}
              heading={"Developer"}
              detail={"Html5,Css3,Javascript,React js"}
            />
            </motion.div>

          
          
              {/* Thrid div */}
              <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
             
            <Card 
              emoji={humble}
              heading={"Tools"}
              detail={"Azure, Grafana, AppDynamics"}
           />
              </motion.div>
           

          </div>
          
          <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>


        </div>
      
   
    
  );
};

export default Services;
