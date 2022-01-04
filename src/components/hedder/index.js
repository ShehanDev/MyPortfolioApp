import React, {useState} from 'react';
import Web from './web'
import Mobile from './mobile'
import  './hedder.css'




function Hedder() {

const [isOpen,setIsOpen] = useState(false);
   
    return (
        <div className="hedder">
           
            <div className="menu">
                <div className="web-menu">   <Web />  </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>  
                    <i class="fi fi-rr-apps " ></i>
                    </div>
                    {isOpen && <Mobile  isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Hedder
