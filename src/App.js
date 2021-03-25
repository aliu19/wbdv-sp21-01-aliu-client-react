import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import Home from "./components/home";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/courses" component={CourseManager}/>
      <Route path="/editor" render={(props) => <CourseEditor {...props}/>}/>
      {/*passes down children of props - spreader operator*/}
    </BrowserRouter>
  );
}

export default App;
