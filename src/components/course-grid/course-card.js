import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
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

  return (
      <div className="col">
        <div className="card">
          <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social-logo.png"
               className="card-img-top"
               alt="#"/>
          <div className="card-body">
            <h5 className="card-title">
              {
                !editing &&
                <Link to="/courses/editor">
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
            </h5>
            <p className="card-text">Some description</p>
            <Link to="/editor" className="btn btn-primary">
              {course.title}
            </Link>
          </div>

          <div className='wbdv-controls-top-right fa-2x'>
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
            {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
            {editing && <i onClick={() => deleteCourse(course)} className="fas fa-times"></i>}
          </div>
        </div>
      </div>
  )
}
export default CourseCard