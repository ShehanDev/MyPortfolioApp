import React from 'react'
import Hedder from '../hedder'
import Body from '../body'
import Footer from '../footer'
import './home.css'

function Home() {
    return (
        <div className='home'>
            <div>
                <Hedder />
            </div>
            <div>
                <Body />
            </div>
            <div>
                <Footer />
            </div>
            
        </div>
        
    )
}

export default Home
