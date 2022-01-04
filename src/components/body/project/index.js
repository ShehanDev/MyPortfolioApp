import React from 'react'
import './project.css'
import {ProjectData} from '../../data/projectsData'
import ProjectCard from './projectCard';
import Separator from '../../commern/saparator';

function Projects() {
    const data =  ProjectData;
    return (
        <div className='project-section'>
            <Separator />
          <lable className='section-title'>PROJECTS</lable>
            <div>
                { data.map((project)=>{
                    return <ProjectCard  project={project} />;
                })}
            </div>
            
        </div>
    )
}

export default Projects
