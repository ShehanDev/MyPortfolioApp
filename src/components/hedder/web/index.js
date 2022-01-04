import React from 'react';
import './web.css';

function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#Projects'>
                <i class="fi fi-rr-edit-alt menu-icon"></i>Projects

                </a>
            </div>

            <div className='web-option'>
                <a href='#Skills'>
                <i class="fi fi-rr-laptop menu-icon"></i>Skills
                </a>
            </div>

            <div className='web-option'>
                <a href='#Work'>
               <i class="fi fi-rr-briefcase menu-icon"></i>Work

                </a>
            </div>

            <div className='web-option'>
             <a  href='#Contact'>
             <i class="fi fi-rr-envelope menu-icon"></i>Contact
            </a>
            </div>

        </div>
    )
}

export default Web
