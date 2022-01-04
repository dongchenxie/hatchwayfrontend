import React from 'react'

const Student = ({company,firstName,email, lastName, pic, skill, grades}) => {
  return(
  <article className='single-student'>
    <h4>{firstName}</h4>
    <p>{email}</p>
    <p>{skill}</p>
    <p>{company}</p>

  </article>
  );
 
 
  
}

export default Student
