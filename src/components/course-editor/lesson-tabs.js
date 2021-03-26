import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";

const LessonTabs = (
    {
      lessons=[],
      createLesson=() => alert("Create Lesson"),
      deleteLesson = (item) => alert("Delete Lesson " + item._id),
      updateLesson = (item) => alert("Update Lesson")
    }) =>
    <div>
      <ul className="nav nav-tabs">
        {
          lessons.map(lesson =>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <EditableItem
                      item={lesson}
                      deleteItem={deleteLesson}
                      updateItem={updateLesson}
                  />
                </a>
              </li>
          )
        }
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-plus" onClick={createLesson}></i>
          </a>
        </li>
      </ul>
    </div>

const stpm = (state) => {
  return {
    lessons: state.lessonReducer.lessons
  }
}

const dtpm = (dispatch) => {
  return {
    createLesson: () => dispatch({type: "CREATE_LESSON"}),
    deleteLesson: (item) => dispatch({type: "DELETE_LESSON", lessonToDelete: item}),
    updateLesson: (lesson) => dispatch({type: "UPDATE_LESSON", lesson})
  }
}

export default connect(stpm, dtpm) (LessonTabs)