import React from 'react';
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Route} from "react-router-dom";
import courseService from "../services/course-service"; // to differentiate b/w same function names

export default class CourseManager extends React.Component {
  state = {
    courses: []
  }

  componentDidMount = () =>
    courseService.findAllCourses()
      .then(courses => this.setState({courses}))

  addCourse = () => { // { = body of function
    const newCourse = {
      title: "New Course",
      owner: "me",
      lastModified: "2/20/2021"
    }
    courseService.createCourse(newCourse)
      .then(course =>
          this.setState(prevState => ({ // ({ = JSON object
            ...prevState,
            courses: [...prevState.courses, course] // appends new course at end
          })))
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
      .then(status => {
        this.setState((prevState) => ({ // 3 diff ways to do this in notes
          ...prevState, // copies all prev attributes if more than 1 unchanged with a changed attr
          courses: prevState.courses.filter(course => course !== courseToDelete)
        }))
      })
  }

  updateCourse = (course) => {
    courseService.updateCourse(course._id, course)
        .then(status => {
          this.setState(prevState => ({
            ...prevState,
            courses: prevState.courses.map(c => c._id === course._id ? course : c) // if else terse
          }))
        })
  }

  render() {
    return(
        <div>
          <h1>Course Manager</h1>
          <button onClick={this.addCourse}>Add Course</button>
          <Route path="/courses/table">
            <CourseTable
                deleteCourse={this.deleteCourse}
                updateCourse={this.updateCourse}
                courses={this.state.courses}
            />
          </Route>
          <Route path="/courses/grid">
            <CourseGrid
                deleteCourse={this.deleteCourse}
                updateCourse={this.updateCourse}
                courses={this.state.courses}
            />
          </Route>
        </div>
    );
  }
}