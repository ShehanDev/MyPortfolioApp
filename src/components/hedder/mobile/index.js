import React from 'react'
import './mobile.css'

function Mobile({isOpen,setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
              <i class="fi fi-rr-cross-circle"></i>
            </div>
            <div className='mobile-options'>
                    <div className='mobile-option'>
                        <a href='#Projects'>
                        <i class="fi fi-rr-edit-alt menu-icon"></i>Projects
                        </a>
                    </div>

                    <div className='mobile-option'>
                        <a href='#Skills'>
                        <i class="fi fi-rr-laptop menu-icon"></i>Skills
                        </a>
                    </div>

                    <div className='mobile-option'>
                        <a href='#Work'>
                        <i class="fi fi-rr-briefcase menu-icon"></i>Work

                        </a>
                    </div>

                    <div className='mobile-option'>
                        <a  href='#Contact'>
                        <i class="fi fi-rr-envelope menu-icon"></i>Contact
                        </a>
                    </div>

            </div>
        </div>
    )
}

export default Mobile
