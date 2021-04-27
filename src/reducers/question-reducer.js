const initialState = {
  questions: []
}

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_QUESTIONS_FOR_QUIZ":
      return {
        ...state,
        questions: action.questions
      }
    case "ATTEMPT_QUESTION":
      return {
        ...state,
        questions: state.questions.map(q => {
          if(q._id === action.question._id) {
            return action.question
          } else {
            return q
          }
        })
      }
    default:
      return state
  }
}
export default questionReducer