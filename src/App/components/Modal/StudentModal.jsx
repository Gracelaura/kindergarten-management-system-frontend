import React from 'react'
import "./studentmodal.css"
import  icon from "./student.svg";
function StudentModal({setSingleKid, singleKidData, setEdit}) {

  function editModalVisiblity(){
    setEdit(true)
    handleVisibilty()
  }

   function handleVisibilty(){
    setSingleKid(false)
   }
  return (
    <div className='modal'>StudentModal
   {singleKidData && singleKidData.map(item =>(
    <div className="kid-card" key={item.id}>
      
        <div className="avatar">
        <img src={icon} alt="Screenshot-2023-01-11-at-23-59-17" border="0"/>
        </div>
        <h2 className='header-name'>{item.first_name}</h2>
        <div className="text-card">
        <label>Name:</label>
        <h3 className='h3'>{item.first_name} {item.second_name} {item.surname}</h3>
        <label>Details:</label>
        <p className='details'>Age: {item.age}</p>
        <p>Admission No. {item.admission_number}</p>
        <span style={{display: "inline"}}>Description: {item.description}</span>
        </div>
        <div className='buttonContainer'>
        <button className="button-10" type="submit" onClick={editModalVisiblity}>Edit User</button>
        <button className="button-11" type="submit" onClick={handleVisibilty}>Ok</button>
        </div>
    </div>
  ))}

    </div>
    

   
    
  )
}

export default StudentModal