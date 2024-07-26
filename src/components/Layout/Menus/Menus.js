import React from 'react';
import './Menus.css';
import { FcAbout, FcManager, FcParallelTasks, FcGraduationCap, FcCallback } from "react-icons/fc";
import { PiProjectorScreenChartFill } from "react-icons/pi";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className='navbar-profile-pic'>
            <img src='/images/profile.png' alt='Profile' />
          </div>
          <div className='nav-items'>
            <div className='nav-item'>
            
              <div className='nav-link' onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                <FcAbout />About
              </div>
              <div className='nav-link' onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>
                <FcParallelTasks />Skills
              </div>
              <div className='nav-link' onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                <PiProjectorScreenChartFill />Projects
              </div>
              <div className='nav-link' onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
                <FcManager />Work Exp
              </div>
              <div className='nav-link' onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}>
                <FcGraduationCap />Education
              </div>
              <div className='nav-link' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                <FcCallback />Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          
          <div className='nav-link' onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}><FcAbout /></div>
          <div className='nav-link' onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}><FcParallelTasks /></div>
          <div className='nav-link' onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}><PiProjectorScreenChartFill /></div>
          <div className='nav-link' onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}><FcManager /></div>
          <div className='nav-link' onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}><FcGraduationCap /></div>
          <div className='nav-link' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}><FcCallback /></div>
        </>
      )}
    </>
  );
}

export default Menus;
