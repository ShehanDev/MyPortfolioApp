import React from 'react'
import './mycontacs.css'
import{Mycontac} from '../../data/contacdata'

function MyContacData() {
    const cdata = Mycontac; 
    return (
        <div className='mydata-container'>
            <div className='mydata-contac'>
                 { cdata.map((item)=>{
                     return ( 
                     <div  className='mydata-contac1'>
                          <a href={item.link}> <img src={item.icon} className='mc-icon' alt =''></img>
                          </a> 
                           <lable className='con-data'>{item.data}</lable>  
                     </div>
                            
                        )
                 })}
                 
            </div>
        </div>
    )
}

export default MyContacData
