import React from 'react'
import {Link} from "react-router-dom";
import CourseRow from "./course-row";

export default class CourseTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-fluid wbdv-pad-top">
          <table className="table">
            <thead>
            <tr>
              <th>
                <h4>Title</h4>
              </th>
              <th className="d-none d-md-table-cell">
                <h4>Owned</h4>
              </th>
              <th className="d-none d-lg-table-cell">
                <h4>Last Modified</h4>
              </th>
              <th className="fa-2x">
                <button className="btn btn-sm" id="gridBtn">
                  <i className="fa fa-folder fa-2x"></i>
                </button>
                <button className="btn btn-sm" id="sortBtn">
                  <i className="fa fa-sort fa-2x"></i>
                </button>
                <button className="btn btn-sm">
                  <Link to="/courses/grid">
                    <i className="fas fa-th fa-2x"></i>
                  </Link>
                </button>
              </th>
            </tr>
            </thead>

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