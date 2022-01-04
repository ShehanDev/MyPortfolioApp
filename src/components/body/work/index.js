import React from 'react'
import Separator from '../../commern/saparator'
import Internship from './internship'
import './work.css'

function Work() {
    return (
        <div className='work'>
            <Separator />
            <lable className='section-title'>Work</lable>
            <div className='work container'>
               <Internship />
            </div>
           
        </div>
    )
}

export default Work
