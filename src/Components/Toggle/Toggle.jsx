import React from 'react'
import Sun  from '@iconscout/react-unicons/icons/uil-sun';
import Moon  from '@iconscout/react-unicons/icons/uil-moon';
import './Toggle.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Toggle = () => {
const theme =useContext(themeContext)
const darkMode = theme.state.darkMode;

const handleclick =()=>{
  theme.dispatch ({type:'toggle'})
}


  return (
    <div className='toggle' onClick={handleclick}>
      <Moon/>
      <Sun/>
      <div className="t-button"
      
      style ={darkMode ?{left:'2px'}:{right: '2px'}}>
      </div>
    </div>
  )
}

export default Toggle
