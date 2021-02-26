import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/courses" component={CourseManager}/>
      <Route path="/editor" render={(props) => <CourseEditor {...props}/>}/>
      {/*passes down children of props - spreader operator*/}
      
      {/*<div className="container-fluid">*/}
      {/*  <CourseManager/>*/}
      {/*  <CourseEditor/>*/}
      {/*</div>*/}
    </BrowserRouter>
  );
}

export default App;
