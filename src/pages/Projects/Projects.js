import React from 'react';
import './Projects.css';

const projectList = [
  {
    id: 1,
    title: 'Secure Banking',
    description: "For the Secure Banking project, I spearheaded the development of a sophisticated Angular-based frontend, implementing robust role-based access controls for users, internal staff, and administrators to significantly enhance security. My work included the creation of advanced session management and the fortification of frontend security protocols. I also seamlessly integrated Google Sign-Up using Firebase and JWT authentication. To ensure scalability and efficient operations, the application was meticulously deployed with Docker.",
    technologies:' Angular, Spring Boot, PostgreSQL, Docker',
    image: '/images/bank.jpg',
    codeLink: 'https://github.com/nikhitagollamudi/SystemProtocol_SBS.git'
  },
  {
    id: 2,
    title: 'MedInsights',
    description: 'I designed a comprehensive healthcare application using React and Node.js, featuring a dynamic landing page, chat functionality, patient dashboards, and doctor interfaces with feedback and search capabilities. The system also integrates an insurance quote feature for financial transparency and purchases. Leveraging MongoDB ensured robust data storage and management, and the application was deployed on Render for optimal performance and scalability.',
    technologies: 'React, ExpressJS, MongoDB, Render, NodeJS  ',
    image: '/images/medinsights.png',
    codeLink: 'https://github.com/nikhitagollamudi/MedInsights.git'
  },
  {
    id: 3,
    title: 'Detection of Breast Cancer',
    description: 'Engineered a sophisticated breast cancer detection system utilizing Pandas, NumPy, scikit-learn, and Matplotlib. Implemented transfer learning techniques to optimize image analysis, achieving a 50% reduction in diagnostic time. Trained a classification model with 90% precision and 92% recall rates. Developed a Flask backend and web interface using HTML, CSS, and JavaScript for CT scan uploads. Designed an intuitive web page to provide real-time diagnostic results, classifying CT scans as benign or malignant.',
    technologies: 'Flask, Pandas, NumPy, scikit-learn',
    image: '/images/cancer.png',
    codeLink: 'https://github.com/nikhitagollamudi/BreastCancer.git'
  },
];

const Projects = () => {
  return (
    <div className='container projects'>
      <h2 className='col-12 mt-3 mb-1 text-center'>Projects</h2>
      <hr />
      <p className='pb-3 text-center'>"Turning Ideas into Reality: Explore My Work"</p>
      <div className='project-list'>
        {projectList.map((project) => (
          <div key={project.id} className='project-card'>
            <img src={project.image} alt={project.title} />
            <div className='project-card-content'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className='technologies'><strong>Technologies:</strong> {project.technologies}</p>
              <div className='project-links'>
                <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>View Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
