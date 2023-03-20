import React from 'react'
import './Navbar.css';
import Toggle from "../Toggle/Toggle"
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Isha</div>
           <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
            <ul style={{listStyleType:'none' }}>
            <Link spy ={true} to='Navbar' smooth ={true} activeClass="activeClass">


               
                    <li>About</li>
                    </Link>
                    <Link spy ={true} to='Experience' smooth ={true} activeClass="activeClass">
                    <li>Experience</li>
                    </Link>
                    <Link spy ={true} to='Service' smooth ={true} activeClass="activeClass">
                    <li>Projects</li>
                    </Link>
                    <Link spy ={true} to='Education' smooth ={true} activeClass="activeClass">
                    <li>Education</li>
                    </Link>
                    <Link spy ={true} to='Awards' smooth ={true} activeClass="activeClass">
                    <li> Awards</li>
                    </Link>

                </ul>
            </div>
            <button className="button n-button" >Contact</button>
        </div>
    </div>
  )
}
