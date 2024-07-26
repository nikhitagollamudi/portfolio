import React from 'react';
import { useTheme} from '../../Context/ThemeContent'
import Typewriter from 'typewriter-effect';
import './Home.css';
import Resume from '../../assets/docs/ngollam final resume.pdf';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const [theme,setTheme]=useTheme()
  const handleTheme=()=>{
    setTheme((prevState)=>(prevState==='light'? 'dark': 'light'));
  };
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='container-fluid home-container'>
        <div className='theme-btn' onClick={handleTheme}>
          {theme==='light'? (<BsFillMoonStarsFill size='30' color='white'/>):(<BsFillSunFill size='30' color='white' />)}
        </div>
        <div className='container home-content'>
          <h2>Hi, I'm Nikhita Gollamudi</h2>
          <h4>
            <Typewriter
              options={{
                strings: ["Crafting Solutions with Code and Creativity!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
        </div>
        <div className='home-buttons'>
          <button className='btn btn-hire' onClick={scrollToContact}>Hire Me</button>
          <a className='btn btn-cv' href={Resume} target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
      </div>
    </>
  );
}

export default Home;
