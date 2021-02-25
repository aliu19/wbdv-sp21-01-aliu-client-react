import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
          <h1>Course Table</h1>
          <table className="table">
            {
              this.props.courses.map((course, idx) =>
                  <CourseRow
                      course={course}
                      key={idx}
                      deleteCourse={this.props.deleteCourse}/>)
            }
          </table>
        </div>
    )
  }
}