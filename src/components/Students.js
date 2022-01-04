import React from 'react'
import Student from './Student'
const Students = (props) => {
  return (
    <section>
      <p>Students</p>
      <div>
        <p>test</p>

 
        {
          props.students.map((student) => {
            return <Student student = {student}></Student>
          })}
        
     
      </div>
    </section>
  )
}

export default Students
