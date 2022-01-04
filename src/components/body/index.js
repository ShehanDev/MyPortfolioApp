import React from 'react'
import './body.css'
import About from './about'
import Projects from './project'
import Skills from './skills'
import Work from './work'
import Contacts from './contact'


function Body() {
    return (
        <div className='body'>
           <section id='about'>
               <About />
           </section>
           <section id='Projects'>
               <Projects />
           </section>
           <section id='Skills'>
               <Skills />
           </section>
           <section id='Work' >
                <Work />
           </section>
           <section id='Contact'>
               <Contacts />
           </section>
           
        </div>
    )
}

export default Body
