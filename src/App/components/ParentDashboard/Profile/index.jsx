import React from 'react'
import './profile.css'

function Profile() {
  return (
  <div className='bg-pink-50 h-full '>
    <div className='text-pink-600 text-xl text-center p-5'>PARENTS PROFILE.</div>

      <div className='w-full flex justify-center'>
        <div className='h-28 w-28 bg-pink-100 rounded-full'></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

      </div>

   
      
      <form className='grid grid-cols-3 gap-4 m-3'>
     
          <input className="h-28 rounded-md bg-pink-200 text-pink-600 text-center text-4xl"
            type='text'
            name='FirstName'
            value='Grace'
          />
          <input
          className="h-28 rounded-md bg-pink-200 text-pink-600 text-center text-4xl"
            type='text'
            name='LastName'
            value='Njuguna'
          />
          <input
          className="h-28 rounded-md bg-pink-200 text-pink-600 text-center text-4xl"
            type='number'
            name='phonenumber'
            value= "079398373334"
          /> 
      </form>
    </div>
    
  
    
    
  )
}

export default Profile