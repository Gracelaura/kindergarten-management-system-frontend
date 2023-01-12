import React from 'react'
import "./studentmodal.css"
// import { VscAccount } from "react-icons/vsc";
function StudentModal({setSingleKid, singleKidData}) {
  return (
    <div className='modal'>StudentModal
   
    <div className="kid-card">
        <div className="avatar">
        <img src="https://i.ibb.co/8D0GSPz/Screenshot-2023-01-11-at-23-59-17.png" alt="Screenshot-2023-01-11-at-23-59-17" border="0"/>
        </div>
        <h2 className='header-name'>{singleKidData.first_name}</h2>
        <div className="text-card">
        <label>Name:</label>
        <h3 className='h3'>{singleKidData.first_name} {singleKidData.second_name} {singleKidData.surname}</h3>
        <label>Details:</label>
        <p className='details'>Age: {singleKidData.age}</p>
        <p>Admission No. {singleKidData.admission_number}</p>
        <span style={{display: "inline"}}>Description: {singleKidData.description}</span>
        </div>
        <div className='buttonContainer'>
        <button className="button-10" type="submit">Edit User</button>
        <button className="button-11" type="submit" onClick={() => setSingleKid(false)}>Ok</button>
        </div>
    </div>
  

    </div>
   
    
  )
}

export default StudentModal