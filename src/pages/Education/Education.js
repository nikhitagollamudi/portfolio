import React from 'react';
import './Education.css';
import { FaUniversity, FaGraduationCap, FaSchool, } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'Indiana University Bloomington',
    duration: '08/2023 – 05/2025',
    location: 'Bloomington, USA',
    coursework: [
      'Applied Algorithms',
      'Applied Machine Learning',
      'Software Engineering',
      'Social Media Mining',
      'System & Protocol Security & Information Assurance',
      'Engineering Cloud Computing',
    ],
    image: '/images/indiana.jpg',
    icon: <FaUniversity />,
  },
  {
    id: 2,
    degree: 'Bachelor of Technology in Electronics and Communication Engineering',
    institution: 'Anurag Group Of Institutions',
    duration: '08/2019 – 06/2023',
    location: 'Hyderabad, Telangana, India',
    image: '/images/anuragInst.jpeg',
    icon: <FaGraduationCap />,
  },
  {
    id: 3,
    degree: 'Secondary Education',
    institution: 'D.A.V Public School',
    duration: '04/2015 – 04/2016',
    location: 'Hyderabad, Telangana, India',
    image: '/images/DAV.jpeg',
    icon: <FaSchool />,
  },
];

const Education = () => {
  return (
    <div className="container education">
      <h2 className="section-title">
        Education 
      </h2>
      <hr />
      <p className="tagline">"Expanding My Knowledge and Skills"</p>
      {educationData.map((edu, index) => (
        <div key={edu.id} className={`education-row ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
          <div className="education-image-column">
            <img src={edu.image} alt={`${edu.institution} logo`} className="education-image" />
          </div>
          <div className="education-content-column">
            <div className="education-details">
              <h3>{edu.degree} {edu.icon}</h3>
              <h4>{edu.institution}</h4>
              <p className="duration">{edu.duration} 📅</p>
              <p className="location">{edu.location} 📍</p>
              {edu.coursework && (
                <div className="coursework">
                  {edu.coursework.map((course, index) => (
                    <span key={index} className="course-tag">
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
