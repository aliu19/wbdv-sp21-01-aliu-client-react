import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import questionService from "../../services/questions-service"
import Question from "./questions/question";

const Quiz = () => {

  const {quizId} = useParams()
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    questionService.findQuestionsForQuiz(quizId)
    .then((questions) => {
      setQuestions(questions)
    })
  }, [])

  return (
      <div>
        <h1>Quiz TODO QUIZNAME</h1>
        <div className="list-group">
          {
            questions.map((question) => {
              return(
                  <div className="list-group-item">
                    <Question question={question} key={question._id}/>
                  </div>
              )
            })
          }
        </div>
      </div>
  )
}
export default Quiz