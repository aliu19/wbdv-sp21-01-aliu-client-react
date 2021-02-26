import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = (
    {
      courses,
      deleteCourse,
      updateCourse
    }) => {
  return (
      <div className="container-fluid wbdv-pad-top">

        <div className="row">
          <div className="col-5 d-none d-md-block">
            <h4>Recent Documents</h4>
          </div>
          <div className="col-5 d-none d-md-block">
            <h4>Owned by me <i className="fa fa-sort-down"></i></h4>
          </div>
          <div className="d-block -pull-right">
            <button className="btn btn-sm" id="gridBtn">
              <i className="fa fa-folder fa-2x"></i>
            </button>
            <button className="btn btn-sm" id="sortBtn">
              <i className="fa fa-sort fa-2x"></i>
            </button>
            <button className="btn btn-sm">
              <Link to="/courses/table">
                <i className="fas fa-list fa-2x"></i>
              </Link>
            </button>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {
              courses.map(course =>
                  <CourseCard
                      course={course}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                  />
              )
            }
          </div>
        </div>
      </div>
  )
}

export default CourseGrid