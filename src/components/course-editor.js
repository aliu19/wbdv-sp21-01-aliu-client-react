import React from 'react'

const CourseEditor = ({history}) => {
  return(
      <h1>
        <i onClick={() => history.goBack()} className="fas fa-arrow-left"></i>
        Course Editor
      </h1>
  )
}
export default CourseEditor