import React from 'react'
import SocialMedia from '../../commern/social-contcs/index'
import './about.css'

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                   <span className='name-text-salution'> Hi ! I'm </span> < br />
                   <span className='name-text-my'> Shehan Mallawaarachchi </span> < br />
                    Web Developer and  Creative Disigner { '</>'}
                </div>
                <div className='my-imge-grid'>
                        <img src={require('../../../assets/MyProfilePic.jpg').default }  className='myPic' alt='pic icon' />
                </div>
            </div>
            <div className='about-bottom'>
                <SocialMedia />
            </div>
        </div>
    )
}

export default About
