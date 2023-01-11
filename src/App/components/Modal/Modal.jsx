import React from 'react'
import "./modal.css"
function Modal({setModal, modalData}) {
    
  return (
    
    <div className='modal'>
    {modalData && modalData.map(data => (
    <div className='modal-content' key={data.id}>
    <div modal-header>
      <h2 className='modal-title'>{data.first_name} {data.second_name} {data.surname}</h2>
    </div>
    <div className='modal-body'>
      <h4>Admission number {data.admission_number}</h4>
      <h4>Age: {data.age}</h4>
      <p>{data.description}</p>
    </div>
    <div className='modal-footer'>
    </div>
    </div>
    ))}
    <button className='button-6 animate-bounce'onClick={()=>setModal(false)} >Back</button>
    </div>
  
  )
}

export default Modal  