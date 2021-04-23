import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import Home from "./components/home";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import CourseEditor from "./components/course-editor/course-editor";

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

      {/*passes down children of props - spreader operator*/}
    </BrowserRouter>
  );
}

export default App;
