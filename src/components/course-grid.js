import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) => {
  return(
      <div>
        <h2>Course Grid {courses.length}</h2>
        <Link to="/courses/table">
          <i className="fas fa-3x fa-list float-right"></i>
        </Link>
        <div className="row">
          {
            courses.map(course =>
                <CourseCard course={course}/>
            )
          }
        </div>
      </div>
  )
}

export default CourseGrid