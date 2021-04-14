import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
      course,
      deleteCourse,
      updateCourse
    }) => {

  const [editing, setEditing] = useState(false) // react hooks
  const [newTitle, setNewTitle] = useState(course.title)

  const saveTitle = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: newTitle
    }
    updateCourse(newCourse)
  }

  return ( // ( indicates explicit return
      <tr>
        <td>
          {
            !editing &&
            <Link to={`/courses/table/edit/${course._id}`}>
              {course.title}
            </Link>
          }
          {editing &&
          <input
              onChange={(event) => setNewTitle(event.target.value)}
              value={newTitle}
              className="form-control"
          />
          }
        </td>
        <td className="d-none d-md-table-cell">{course.owner}</td>
        <td className="d-none d-lg-table-cell">{course.lastModified}</td>
        <td>
          {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x"></i>}
          {editing && <i onClick={() => saveTitle()} className="fas fa-check fa-2x"></i>}
          {editing && <i onClick={() => deleteCourse(course)} className="fas fa-times fa-2x"></i>}
        </td>
      </tr>
  )
}

export default CourseRow