import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
          <h1>Course Table</h1>
          <Link to="/courses/grid">
            <i className="fas fa-2x fa-th float-right"></i>
          </Link>
          <table className="table">
            {
              this.props.courses.map((course, idx) =>
                  <CourseRow
                      course={course}
                      key={idx}
                      deleteCourse={this.props.deleteCourse}
                      updateCourse={this.props.updateCourse}
                  />)
            }
          </table>
        </div>
    )
  }
}