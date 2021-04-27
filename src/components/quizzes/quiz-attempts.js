import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import quizService from "../../services/quizzes-service";
import Question from "./questions/question";

const QuizAttempts = () => {

  const {quizId} = useParams()
  const [quizTitle, setQuizTitle] = useState("")
  const [attempts, setAttempts] = useState([])

  useEffect(() => {
    quizService.findQuizById(quizId)
    .then((quiz) => {
      setQuizTitle(quiz.title)
    })
    quizService.findAttemptsForQuiz(quizId)
    .then((attempts) => {
      setAttempts(attempts)
    })
  }, [])

  return(
      <div>
        <h1>
          {quizTitle} Attempts
        </h1>
        <div className="list-group">
          <div className="list-group-item">
            {
              attempts.map((attempt, idx) => {
                return (
                    <div className="list-group-item">
                      <h2>Attempt {idx + 1}, Score: {attempt.score}</h2>
                      {
                        attempt.answers.map((question) => {
                          return(
                              <div className="list-group-item" key={idx}>
                                <Question question={question}
                                          key={question._id}
                                          graded={true}/>
                              </div>
                          )
                        })
                      }
                    </div>
                )
              })
            }
          </div>
        </div>
      </div>
  )
}
export default QuizAttempts