import React from 'react'
import './welcome.css'
import ParentsKids from './assets/image/parents-kids.png'

function Welcome() {
  return (
  <>
    
    <div className='main'>

    <div className="content">
        <h2>WELCOME TO KINDERJOY</h2>
        <p>We believe there is nothing more important than education.</p>
      </div>
     
      <div className="image-card">
        <img src={ParentsKids} alt="parents and kids"/>
      </div>
      
      
    </div>
   
  </>
    
  )
}

export default Welcome