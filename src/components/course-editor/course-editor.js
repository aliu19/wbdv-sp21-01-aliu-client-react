import React from 'react'
import {combineReducers, createStore} from "redux";
import {useParams} from 'react-router-dom';
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
  const {courseId, moduleId} = useParams();

  return (
      <Provider store={store}>
        <div className="container-fluid pull-left wbdv-pad-top">

          <h2>
            <button className="btn btn-primary">
              <i onClick={() => history.goBack()} className="fas fa-arrow-left"></i>
            </button>
            Editor {courseId} {moduleId}
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