import React from 'react'

const MultipleChoiceQuestion = ({question, yourAnswer, setYourAnswer, graded}) => {
  return(
      <div>
        <h3>
          {question.question}
          <i className={`${graded && yourAnswer === question.correct && 'fa fa-check float-right'}
          ${graded && yourAnswer !== question.correct && 'fa fa-times float-right'}`}></i>
        </h3>
        <ul className="list-group">
          {
            question.choices.map((choice => {
              return (
                  <label className={`list-group-item
                  ${((graded && yourAnswer === question.correct && question.correct === choice) ||
                      (graded && yourAnswer !== question.correct && question.correct === choice)) && 'list-group-item-success'}
                      ${graded && yourAnswer !== question.correct && yourAnswer === choice && 'list-group-item-danger'}`}>
                    <input type="radio"
                           onClick={() => {
                             setYourAnswer(choice)
                           }}
                           name={question._id}/>
                    {choice}
                    <i className={`${graded && question.correct === choice && 'fa fa-check float-right'}
                    ${graded && yourAnswer !== question.correct && yourAnswer === choice && 'fa fa-times float-right'}`}></i>
                  </label>
              )
            }))
          }
        </ul>
      </div>
  )
}
export default MultipleChoiceQuestion