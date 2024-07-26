import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'Y Stem and Chess Inc.',
    link: 'https://www.linkedin.com/company/ystemandchessinc/',
    description: [
      'Transitioning the frontend framework from Angular to React for improved performance and maintainability.',
      'Developing student activity pages and integrating APIs to enhance user interactions.',
      'Contributing to the website development, supporting the educational mission by improving user experience and platform efficiency.',
    ],
    image: '/images/ystem.jpeg',
  },
  {
    id: 2,
    title: 'Software Development Intern',
    company: 'LTIMindtree',
    link: 'https://www.linkedin.com/company/ltimindtree/',
    description: [
      'Enhanced efficiency by 30% through a robust Tourism Management System.',
      'Spearheaded the development of an interactive dashboard to streamline tour operations and enhance data visualization.',
      'Crafted a responsive design, ensuring a seamless user experience across all devices.',
      'Optimized backend performance, reducing load times and improving platform efficiency.',
      'Integrated advanced search and filtering capabilities, enabling users to quickly find and book tours.',
    ],
    image: '/images/LTI.jpeg',
  },
  {
    id: 3,
    title: 'Software Engineering Fellow',
    company: 'Headstarter',
    link: 'https://www.linkedin.com/company/headstarterai/mycompany/',
    description: [
      'Developed a Portfolio Website using advanced HTML5 and CSS3 techniques.',
      'Engineering projects with React, Next.js, and Firebase, including a Pantry Tracker and Customer Support AI, leveraging modern frameworks and cloud services.',
      'Implementing scalable SaaS solutions such as a Flashcard system with paywall features using OpenAI, secure authentication, and payment gateways.',
      'Enhancing expertise in data structures, algorithms, and cloud infrastructure through hands-on projects, active participation in hackathons, and technical networking events.'
    ],
    image: '/images/headstarter.jpeg',
  },
];

const Experience = () => {
  return (
    <div className='container experience'>
      <h2 className='col-12 mt-3 mb-1 text-center'>
        Experience 
      </h2>
      <hr />
      <p className='pb-3 text-center tagline'>"Showcasing My Professional Journey"</p>
      <div className="experience-list">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-item">
            <img src={experience.image} alt={`${experience.company} logo`} className="experience-image" />
            <div className="experience-content">
              <h3>{experience.title}</h3>
              <h4>
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                  {experience.company}
                </a>
              </h4>
              <ul>
                {experience.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
