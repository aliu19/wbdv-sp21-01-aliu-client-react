import React, {useState} from 'react'
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, graded, attemptQuestion}) => {

  const [yourAnswer, setYourAnswer] = useState("")

  return (
    <div>
      {
        question.type === "TRUE_FALSE" &&
        <TrueFalseQuestion question={question}
                           yourAnswer={yourAnswer}
                           setYourAnswer={setYourAnswer}
                           graded={graded}
                           attemptQuestion={attemptQuestion}/>
      }
      {
        question.type === "MULTIPLE_CHOICE" &&
        <MultipleChoiceQuestion question={question}
                                yourAnswer={yourAnswer}
                                setYourAnswer={setYourAnswer}
                                graded={graded}
                                attemptQuestion={attemptQuestion}/>
      }
      Your Answer: {yourAnswer}
    </div>
  )
}
export default Question