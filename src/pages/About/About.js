import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
    <div className='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-6 about-img'>
                <img 
                src='/images/nav.jpg'
                alt='profile_pic'
                />
            </div>
             <div className='col-md-6 col-xl-6 col-lg-6 col-xs-6 about-me'>
                <h2>About me</h2>
                <p>
                    Hey there! I'm Nikhita Gollamudi, a software engineer with a flair for innovation and a drive to make a difference. Currently, I'm pursuing my Master of Science in Computer Science at Indiana University Bloomington, where I have honed my expertise in programming, data management, and web development. Beyond my technical abilities, I'm known for my strong communication, teamwork, and problem-solving skills. Whether it's leading a project or collaborating with a team, I bring energy and enthusiasm to every challenge. I'm passionate about crafting software solutions that enhance user experiences and streamline operations. Let's connect and see how we can create something amazing together!
                </p>
             </div>
        </div>
    </div>
    </>
   
  );
};

export default About;