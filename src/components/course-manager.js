import React from 'react';
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";

export default class CourseManager extends React.Component {
  state = {
    courses: [
      {title: "CS5610", owner: "me", lastModified: "1/1/2021"},
      {title: "CS3200", owner: "you", lastModified: "1/12/2021"},
      {title: "CS5200", owner: "she", lastModified: "1/11/2021"},
      {title: "CS1234", owner: "us", lastModified: "1/16/2021"}
    ]
  }

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "me",
      lastModified: "2/20/2021"
    }
    this.state.courses.push(newCourse)
    this.setState(this.state)
  }

  deleteCourse = (courseToDelete) => {
    const newCourses = this.state.courses.filter(course => course !== courseToDelete)
    this.setState({
      courses: newCourses
    })
  }

  render() {
    return(
        <div>
          <h1>Course Manager</h1>
          <button onClick={this.addCourse}>Add Course</button>
          <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
          <CourseGrid deleteCourse={this.deleteCourse} courses={this.state.courses}/>
        </div>
    );
  }
}