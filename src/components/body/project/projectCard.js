import React from 'react'
import  './projectCard.css'
function ProjectCard( {project}) {
    return (
        <div className='prooject-card'>
            <div className='projectCard-data'>
               <label className='project-title-lable'>{ project.title }</label>
                <div className='project-links'>
                    {project.gitHub && (
                        <a className='project-link' href={project.gitHub}>
                            <div className='link-buttion'>
                            <i class="devicon-github-original colored"></i>GitHub
                            </div>
                        </a>
                    )}
                </div>
                <p> {project.about}</p>


                <div className='project-tags'>
                    {project.tags.map((tag) =>{
                       return  <label className='tags'>{tag}</label>;
                    })}   
                </div>

            </div>
            
                <img  className='project-image' src={project.image } alt ='' />
            
        </div>
    );
}

export default ProjectCard
