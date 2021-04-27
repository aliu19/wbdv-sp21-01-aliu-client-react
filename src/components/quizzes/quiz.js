import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import questionService from "../../services/questions-service"
import quizService from "../../services/quizzes-service"
import Question from "./questions/question";

const Quiz = (
    {
        questions=[],
        findQuestionsForQuiz = (quizId) => console.log(quizId),
        attemptQuestion = (question) => console.log("Update attempted question")
    }
) => {

  const {quizId} = useParams()
  const [quizTitle, setQuizTitle] = useState("")
  const [graded, setGraded] = useState(false)

  useEffect(() => {
    findQuestionsForQuiz(quizId)
    quizService.findQuizById(quizId)
    .then((quiz) => {
      setQuizTitle(quiz.title)
    })
  }, [])

  return (
      <div>
        <h1>{quizTitle}</h1>
        <div className="list-group">
          {
            questions.map((question) => {
              return(
                  <div className="list-group-item">
                    <Question question={question}
                              key={question._id}
                              graded={graded}
                              attemptQuestion={attemptQuestion}/>
                  </div>
              )
            })
          }
        </div>
        <button className="btn btn-success "
                onClick={() => {
                  setGraded(true)
                  quizService.submitQuiz(quizId, questions)}}>
          Grade
        </button>
      </div>
  )
}

const stpm = (state) => {
  return {
    questions: state.questionReducer.questions
  }
}

const dtpm = (dispatch) => {
  return {
    findQuestionsForQuiz: (quizId) => {
      questionService.findQuestionsForQuiz(quizId)
      .then(theQuestions => dispatch({
        type: "FIND_QUESTIONS_FOR_QUIZ",
        questions: theQuestions
      }))
    },
    attemptQuestion: (question) => dispatch({ // basically update question rendered but not on api
      type: "ATTEMPT_QUESTION",
      question: question
    })
  }
}

export default connect(stpm, dtpm) (Quiz)