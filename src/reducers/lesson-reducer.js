const initialState = {
  lessons: [
    {id: "123", title: "Lesson 123"},
    {id: "234", title: "Lesson 234"},
    {id: "345", title: "Lesson 345"}
  ]
}

const lessonReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
      const newState = {
        lessons: [
          ...state.lessons,
          {
            _id: (new Date()).getTime(),
            title: "New Module"
          }
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
    default:
      return state
  }
}
export default lessonReducer