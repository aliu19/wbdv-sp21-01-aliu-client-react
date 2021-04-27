import React from 'react'

const TrueFalseQuestion = ({question, yourAnswer, setYourAnswer, graded, attemptQuestion}) => {
  return(
      <div>
        <h3>
          {question.question}
          <i className={`${graded && yourAnswer === question.correct && 'fa fa-check float-right'}
          ${graded && yourAnswer !== question.correct && 'fa fa-times float-right'}`}></i>
        </h3>
        <div className="list-group">
          <label className={`list-group-item 
          ${((graded && yourAnswer === question.correct && question.correct === "true") ||
          (graded && yourAnswer !== question.correct && question.correct === "true")) && 'list-group-item-success'}
          ${graded && yourAnswer !== question.correct && question.correct !== "true" && 'list-group-item-danger'}`}>
            <input type="radio"
                   onClick={() => {
                     setYourAnswer("true")
                     attemptQuestion({...question, answer: "true"})
                   }}
                   name={question._id}/>
            True
            <i className={`${graded && question.correct === "true" && 'fa fa-check float-right'}
            ${graded && yourAnswer !== question.correct && question.correct !== "true" && 'fa fa-times float-right'}`}></i>
          </label>
          <label className={`list-group-item 
          ${((graded && yourAnswer === question.correct && question.correct === "false") ||
              (graded && yourAnswer !== question.correct && question.correct === "false")) && 'list-group-item-success'}
          ${graded && yourAnswer !== question.correct && question.correct !== "false" && 'list-group-item-danger'}`}>
            <input type="radio"
                   onClick={() => {
                     setYourAnswer("false")
                     attemptQuestion({...question, answer: "false"})
                   }}
                   name={question._id}/>
            False
            <i className={`${graded && question.correct === "false" && 'fa fa-check float-right'}
            ${graded && yourAnswer !== question.correct && question.correct !== "false" && 'fa fa-times float-right'}`}></i>
          </label>
        </div>
      </div>
  )
}
export default TrueFalseQuestion