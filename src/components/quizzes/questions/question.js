import React, {useState} from 'react'
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question}) => {

  const [yourAnswer, setYourAnswer] = useState("")
  const [graded, setGraded] = useState(false)

  return (
    <div>
      {
        question.type === "TRUE_FALSE" &&
        <TrueFalseQuestion question={question} yourAnswer={yourAnswer} setYourAnswer={setYourAnswer} graded={graded}/>
      }
      {
        question.type === "MULTIPLE_CHOICE" &&
        <MultipleChoiceQuestion question={question} yourAnswer={yourAnswer} setYourAnswer={setYourAnswer} graded={graded}/>
      }
      Your Answer: {yourAnswer}
      <br/>
      <button className="btn btn-success" onClick={() => {setGraded(true)}}>
        Grade
      </button>
    </div>
  )
}
export default Question