import React from 'react'
import './social-contac.css'
import { SocialData } from '../../data/social'

function SocialMedia() {
  const  data = SocialData ;
    return (
        <div className='Social-contacs'> 
          { data.map((item)=>{
            return(
              <a href={item.link}>
                  <div className='Social-media-icon-div'>
                      <img src={item.icon } className='social-icon' alt=''></img>
                  </div>
              </a>
            )
          })}
         
        </div>
    )
}

export default SocialMedia
