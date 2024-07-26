import React from 'react';
import './Skills.css';
import { SkillsList } from '../../utils/SkillsList';

const Skills = () => {
  return (
    <>
      <div className='container skills'>
        <h2 className='col-12 mt-3 mb-1 text-center'>Skills</h2>
        <hr />
        <p className='pb-3 text-center '>"Unlocking My Toolbox: What I Bring to the Table"</p>
        <div className='skills-list'>
          {SkillsList.map((skill) => (
            <div key={skill._id} className='cards'>
              <div className='card m-2'>
                <div className='card-content'>
                  <div className='card-body'>
                    <div className='media d-flex align-items-center'>
                      <div className='align-self-center'>
                        {React.cloneElement(skill.icon, { className: 'skills-icon' })}
                      </div>
                      <div className='media-body '>
                        <h6>{skill.name}</h6>
                        <p>{skill.items}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
