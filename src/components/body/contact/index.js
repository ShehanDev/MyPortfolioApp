import React from 'react'
import Separator from '../../commern/saparator'
import SocialMedia from '../../commern/social-contcs'
import './contact.css'
import MyContacData from '../../commern/mycontac'

function Contacts() {
    return (
        <div  className='contacs'>
           <Separator />
           <lable className='section-title'>Contact </lable>
           <div className='contac-container'>
               <div className='contact-social'>
                   <p> Contact  me ! an any of the platform </p>
                   <SocialMedia />
                   <MyContacData />
               </div>
               <div className='download-section'>
                   <a download href={require('../../../assets/Shehan_Mallawaarachchi-CV.pdf').default}>
                   <i class="fi fi-rr-download"></i> Download Resume
                   </a>
               </div>
              
               
           </div>
        </div>
    )
}

export default Contacts
