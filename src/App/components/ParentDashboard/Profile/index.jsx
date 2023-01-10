import React from 'react'
import './profile.css'

function Profile() {
  return (
  <>
    <div>PARENTS PROFILE.</div>

    <div className='profile'>
      <h1>Your Profile</h1>
      <form className='profile-form'>
          <input class=""
            type='text'
            placeholder='Enter Your First Name'
            name='FirstName'
          
          />
          <input
            type='text'
            placeholder='Enter Your Last Name'
            name='LastName'
          
          />
          <input
            type='number'
            placeholder='Enter Your Phone Number'
            name='phonenumber'
          
          /> 
      </form>
    </div>
    
  </>
    
    
  )
}

export default Profile