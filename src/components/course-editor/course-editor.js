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

          {/*  <span className="col-4">*/}
          {/*    <h3>*/}
          {/*      CS5610 - WebDev*/}
          {/*    </h3>*/}
          {/*  </span>*/}

          {/*  <div className="col-1">*/}
          {/*    <h3>*/}
          {/*      Build*/}
          {/*    </h3>*/}
          {/*  </div>*/}
          {/*  <div className="col-1">*/}
          {/*    <h3>*/}
          {/*      Pages*/}
          {/*    </h3>*/}
          {/*  </div>*/}
          {/*  <div className="col-1">*/}
          {/*    <h3>*/}
          {/*      Theme*/}
          {/*    </h3>*/}
          {/*  </div>*/}
          {/*  <div className="col-1">*/}
          {/*    <h3>*/}
          {/*      Store*/}
          {/*    </h3>*/}
          {/*  </div>*/}
          {/*  <div className="col-1">*/}
          {/*    <h3>*/}
          {/*      Apps*/}
          {/*    </h3>*/}
          {/*  </div>*/}
          {/*  <div className="col-1">*/}
          {/*    <h3>*/}
          {/*      Settings*/}
          {/*    </h3>*/}
          {/*  </div>*/}
          {/*  <div className="col-1">*/}
          {/*    <i className="fa fa-plus fa-2x"></i>*/}
          {/*  </div>*/}
          {/*</div>*/}

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