import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";

const LessonTabs = ({lessons=[]}) =>
    <div>
      <ul className="nav nav-tabs">
        {
          lessons.map(lesson =>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <EditableItem item={lesson}/>
                </a>
              </li>
          )
        }
      </ul>
    </div>

const stpm = (state) => {
  return {
    lessons: state.lessonReducer.lessons
  }
}

const dtpm = (dispatch) => {

}

export default connect(stpm, dtpm) (LessonTabs)