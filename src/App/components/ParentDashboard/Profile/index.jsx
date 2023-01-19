import React from 'react'
import parents from './parents.svg'

function Profile() {
  
  const parent = localStorage.getItem("parent_data")
let list = JSON.parse(parent)
  return (
  <div className='bg-pink-50 h-full '>
    <div className='text-pink-600 text-xl text-center p-5'>PARENTS PROFILE.</div>

      <div className='w-full flex justify-center'>
        <div className='h-28 w-28 bg-pink-100 rounded-full'>
          <img src={parents} alt='parents'/>
        </div> 
      </div>

      <form className='grid grid-cols-3 gap-4 m-3'>
     
          <input className="h-28 rounded-md bg-pink-200 text-pink-600 text-center text-4xl"
            type='text'
            name='FirstName'
            value={list.data.first_name}
          />
          <input
          className="h-28 rounded-md bg-pink-200 text-pink-600 text-center text-4xl"
            type='text'
            name='LastName'
            value={list.data.last_name}
          />
          <input
          className="h-28 rounded-md bg-pink-200 text-pink-600 text-center text-4xl"
            type='number'
            name='phonenumber'
            value={list.data.phone_number}
          /> 
      </form>
    </div>
    
  
    
    
  )
}

export default Profile