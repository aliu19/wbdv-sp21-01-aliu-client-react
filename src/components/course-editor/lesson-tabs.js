import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import EditableItem from "../editable-item";
import lessonService from "../../services/lesson-service"

const LessonTabs = (
    {
      lessons=[],
      createLesson=() => alert("Create Lesson"),
      deleteLesson = (item) => alert("Delete Lesson " + item._id),
      updateLesson = (item) => alert("Update Lesson"),
      findLessonsForModule = (moduleId) => console.log(moduleId)
    }) => {

  const {courseId, moduleId}  = useParams();
  useEffect(() => {
    findLessonsForModule(moduleId)
  }, [])

  return (
      <div>
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
              <i className="fas fa-plus" onClick={() => createLesson(moduleId)}></i>
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
    createLesson: (moduleId) => {
      lessonService.createLesson(moduleId, {title: "New Lesson"})
        .then(theActualLesson => dispatch({
          type: "CREATE_LESSON",
          lesson: theActualLesson
        }))
    },
    deleteLesson: (item) => {
      lessonService.deleteLesson(item._id)
        .then(status => dispatch({
          type: "DELETE_LESSON",
          lessonToDelete: item
        }))
    },
    updateLesson: (lesson) => {
      lessonService.updateLesson(lesson._id, lesson)
        .then(status => dispatch({
          type: "UPDATE_LESSON",
          lesson
        }))
    },
    findLessonsForModule: (moduleId) => {
      lessonService.findLessonsForModule(moduleId)
        .then(theLessons => dispatch({
          type: "FIND_LESSONS_FOR_MODULE",
          lessons: theLessons
        }))
    }
  }
}

export default connect(stpm, dtpm) (LessonTabs)