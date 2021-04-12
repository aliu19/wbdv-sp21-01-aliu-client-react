import React from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import EditableItem from "../editable-item";

const LessonTabs = (
    {
      lessons=[],
      createLesson=() => alert("Create Lesson"),
      deleteLesson = (item) => alert("Delete Lesson " + item._id),
      updateLesson = (item) => alert("Update Lesson")
    }) => {

  const {courseId, moduleId}  = useParams();

  return (
      <div>
        <h2>Lessons {courseId} {moduleId}</h2>
        <ul className="nav nav-tabs">
          {
            lessons.map(lesson =>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <EditableItem
                        to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
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
  )
}

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