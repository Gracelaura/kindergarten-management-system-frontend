import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import "./addcase.css"
function AddCase({editId, setView, setAddCase, setDisciplanes}) {
const {register, handleSubmit} = useForm()
const token = localStorage.getItem("teacherToken");
const studentId = localStorage.getItem("studentId")
const [postCase, setPostCase] = useState({
    student_id: studentId,
    title: "",
    description: "",
    date: ""
})
    function onSubmit(e){
        e.preventDefault()
        console.log(editId)
        // handleEdit()
        fetch('/disciplines',{
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
                Authorization : `Bearer ${token}`
            },
            body: JSON.stringify(postCase),
        }).then((res) => res.json())
          .then(res => {
            setDisciplanes(res)
            hideAddCase()
        })
 }

    function hideAddCase(){
        setAddCase(false)
    }

    function reopenView() {
        setView(true)
        hideAddCase()
    }

  return (
    <div className='edit-modal'>
    <div className='add-card'>
    <div className="inputs">
        <form className='input-forms' onSubmit={onSubmit}>
            <label>Title:</label>
            <input type="text" className='title' onChange={(e)=> setPostCase({...postCase, title: e.target.value})}/>
            <label>Date:</label>
            <input type="date" className='date' onChange={(e)=> setPostCase({...postCase, date: e.target.value})}/>
            <label>Description:</label>
            <input type="text" className='description' onChange={(e)=> setPostCase({...postCase, description: e.target.value})}/>
            <div className='btn-wrapper'>
            <button className="button-12" type="button" onClick={reopenView} >Back</button>
            <button className="button-13" type="submit" >Add</button>
            </div>
        </form>
    </div>
    </div>
</div>
  )
}

export default AddCase