const initialState = {
  quizzes: []
}

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_ALL_QUIZZES":
      return {
        ...state,
        quizzes: action.quizzes
      }
    case "FIND_QUIZ_BY_ID":
      return {
        ...state,
        quizzes: state.quizzes.map(q => {
          if(q._id === action.quiz._id) {
            return action.quiz
          }
        })
      }
    case "SUBMIT_QUIZ":
    case "FIND_ATTEMPTS_FOR_QUIZ":
    default:
      return state
  }
}
export default quizReducer