const initialState = {
  lessons: []
}

const lessonReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
      const newState = {
        lessons: [
          ...state.lessons,
          action.lesson
        ]
      }
      return newState
    case "DELETE_LESSON":
      const newState1 = {
        lessons: state.lessons.filter(lesson => {
          if(lesson._id === action.lessonToDelete._id) {
            return false
          } else {
            return true
          }
        })
      }
      return newState1
    case "UPDATE_LESSON":
      return {
        lessons: state.lessons.map(l => {
          if(l._id === action.lesson._id) {
            return action.lesson
          } else {
            return l
          }
        })
      }
    case "FIND_LESSONS_FOR_MODULE":
      return {
        ...state,
        lessons: action.lessons
      }
    case "CLEAR_TOPICS":
      return {
        ...state,
        lessons: action.lessons
      }
    default:
      return state
  }
}
export default lessonReducer