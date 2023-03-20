import React from "react";
import "./Works.css";
import syntel from "../../Images/syntel.png";
import th from "../../Images/th.png";
import atos from "../../Images/atos.png";
import project from "../../Images/project.png";
import tcs from "../../Images/tcs.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from "framer-motion"



const Works = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span>Projects</span>

          <span style={{ color: darkMode ? "white" : "" }}></span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            ipsum is simpley dummy text of printing
            <br />
            ipsum is simpley dummy text of printing text of printing
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>

          <button className="button s-button">Hire Me</button>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* right -side*/}
      </div>
      <div className="w-right">
      <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
        
        >
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={syntel} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={atos} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={project} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={th} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={tcs} alt="" />
          </div>
          </div>
          </motion.div>
          {/* background circle */}
          <div className="w-backcircle bluecircle"></div>
          <div className="w-backcircle yellowcircle"></div>
        
      </div>
    </div>
  );
};

export default Works;
