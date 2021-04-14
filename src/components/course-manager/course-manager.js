import React from 'react';
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import {Route} from "react-router-dom";
import courseService from "../../services/course-service"; // to differentiate b/w same function names
import "./course-manager.css"

export default class CourseManager extends React.Component {
  state = {
    courses: []
  }

  componentDidMount = () =>
    courseService.findAllCourses()
      .then(courses => this.setState({courses}))

  addCourse = () => { // { = body of function
    const newCourse = {
      title: document.getElementById("newTitleFld").value,
      owner: "me",
      lastModified: "2/20/2021"
    }
    courseService.createCourse(newCourse)
      .then(course =>
          this.setState(prevState => ({ // ({ = JSON object
            ...prevState,
            courses: [...prevState.courses, course] // appends new course at end
          })))
    document.getElementById("newTitleFld").value = ''
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
          <div className="wbdv-sticky-navbar">
            <div className="row">
              <div className="col-1 d-block">
                <i className="fa fa-bars fa-2x"></i>
              </div>
              <div className="col-2">
                <h4 className="d-none d-md-block">Course Manager</h4>
              </div>
              <div className="col-8 d-block">
                <input type="text"
                       className="form-control"
                       id="newTitleFld"
                       placeholder="New Course Title"/>
              </div>
              <div className="col-1 d-block">
                <i onClick={this.addCourse} className="fa fa-plus-circle fa-2x"></i>
              </div>
            </div>
          </div>

          <Route path="/courses/table" exact={true}>
            <CourseTable
                deleteCourse={this.deleteCourse}
                updateCourse={this.updateCourse}
                courses={this.state.courses}
            />
          </Route>
          <Route path="/courses/grid" exact={true}>
            <CourseGrid
                deleteCourse={this.deleteCourse}
                updateCourse={this.updateCourse}
                courses={this.state.courses}
            />
          </Route>

          <button className="btn wbdv-bottom-right" id="addBtn">
            <i onClick={this.addCourse} className="fa fa-plus-circle fa-4x"></i>
          </button>
        </div>
    );
  }
}