import React from 'react'

const Student = ({student}) => {
  return(
  <article className='single-student'>
    <h4>{student.firstName}</h4>
    <p>{student.email}</p>
    <p>{student.skill}</p>
    <p>{student.company}</p>

  </article>
  );
 
 
  
}

export default Student
