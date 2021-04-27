import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import Home from "./components/home";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import CourseEditor from "./components/course-editor/course-editor";
import Quizzes from "./components/quizzes/quizzes";
import Quiz from "./components/quizzes/quiz";
import {combineReducers, createStore} from "redux";
import quizReducer from "./reducers/quiz-reducer";
import questionReducer from "./reducers/question-reducer";
import {Provider} from "react-redux";

const reducer = combineReducers({
  quizReducer: quizReducer,
  questionReducer: questionReducer
})

const store = createStore(reducer)

function App() {

  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/courses/:layout" component={CourseManager} exact={true}/>
      <Route path={[
        "/courses/:layout/edit/:courseId",
        "/courses/:layout/edit/:courseId/:moduleId",
        "/courses/:layout/edit/:courseId/:moduleId/:lessonId",
        "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId",
        "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId/:widgetId"
      ]}
             exact={true}
             render={(props) => <CourseEditor {...props}/>}>
      </Route>
      <Provider store={store}>
        <Route path="/courses/:courseId/quizzes" exact={true}>
          <Quizzes/>
        </Route>
        <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
          <Quiz/>
        </Route>
      </Provider>

      {/*passes down children of props - spreader operator*/}
    </BrowserRouter>
  );
}

export default App;
