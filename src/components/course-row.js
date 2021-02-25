import React from 'react'

const CourseRow = ({course, deleteCourse}) =>
  <tr>
    <td>{course.title}</td>
    <td>{course.owner}</td>
    <td>{course.lastModified}</td>
    <td>
      <i className="fas fa-trash" onClick={() => deleteCourse(course)}></i>
      <i className="fas fa-edit"></i>
      <i className="fas fa-check"></i>
    </td>
  </tr>

export default CourseRow