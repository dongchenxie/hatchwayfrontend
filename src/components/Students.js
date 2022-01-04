import React from 'react'
import Student from './Student'
const Students = ({students}) => {
 
  return (
    <section>
      <p>Students</p>
      <div>
        <p>test</p>

 
        {
          students.map((student) => {
            return <Student student = {student}></Student>
          })}
        
     
      </div>
    </section>
  )
}

export default Students
