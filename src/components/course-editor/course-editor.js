import React, {useEffect, useState} from 'react'
import {combineReducers, createStore} from "redux";
import {useParams, Link} from 'react-router-dom';
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {Provider, connect} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from "../../services/course-service"

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer,
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {

  const {layout, courseId, moduleId} = useParams();
  const [courseTitle, setNewTitle] = useState("")

  useEffect(() => {
    courseService.findCourseById(courseId)
      .then(course => setNewTitle(course.title))
  }, [courseId])

  return (
      <Provider store={store}>
        <div className="container-fluid pull-left">

          <h2>
            <button className="btn btn-primary">
              <Link style={{color: "white"}} to={`/courses/${layout}`}>
                <i className="fas fa-arrow-left"></i>
              </Link>
            </button>
            {courseTitle}
          </h2>

          <div className="row">
            <div className="col-3">
              <ModuleList/>
            </div>
            <div className="col-9">
              <LessonTabs/>
              <TopicPills/>
            </div>
          </div>

        </div>
      </Provider>
  )
}
export default CourseEditor