import React from 'react'
import { useParams } from 'react-router-dom'
import "./Details.css"

const Details = ({tasks}) => {
  const {taskId}= useParams()
  const task = tasks.find(task=> task.id == taskId)

  if(!task) { 
    return <div>Task not found</div>
  }
  return (
    <div className='container'>
      
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.isCompleted ? "Completed ✅" : "❌ Not Completed"}</p>
    </div>
  )
}

export default Details
//// akasksdaksad