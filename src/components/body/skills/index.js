import React from 'react'
import './skillStyle.css'
import Separator from '../../commern/saparator'
import { SikllData } from '../../data/skillData'
import SkillCard from './skillCard';
function Skills() {
    const data =  SikllData;
    return (
        <div className='skills'>
            <Separator />
            <lable className='section-title'>Skills</lable>
            <div className='skill-container'>
                {data.map((item)=>{
                    return (
                        <div className='skill-section'>
                            <lable className='skill-lable'> {item.type}</lable>
                            <div className='skill-list'>
                                { item.list.map((skill)=>{
                                    return (<SkillCard skill={skill} />) 
                                })}
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Skills
