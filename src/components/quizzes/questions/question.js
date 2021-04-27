import React, {useState} from 'react'
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, graded}) => {

  const [yourAnswer, setYourAnswer] = useState("")

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
    </div>
  )
}
export default Question