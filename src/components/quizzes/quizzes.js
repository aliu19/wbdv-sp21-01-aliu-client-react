import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import quizService from "../../services/quizzes-service"
import {connect} from "react-redux";


const Quizzes = (
    {
        quizzes = [],
        findAllQuizzes = () => console.log("Find Quizzes")
    }) => {

  const {courseId} = useParams()

  useEffect(() => {
    findAllQuizzes()
  }, [])

  return(
      <div>
        <h1>
          Quizzes
        </h1>
        <div className="list-group">
          {
            quizzes.map((quiz) => {
              return(
                  <div className="list-group-item">
                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}
                          key={quiz._id}>
                      {quiz.title}
                    </Link>
                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}
                          key={quiz._id}
                          className="btn btn-primary float-right">
                      Start
                    </Link>
                  </div>
              )
            })
          }
        </div>
      </div>
  )
}

const stpm = (state) => {
  return {
    quizzes : state.quizReducer.quizzes
  }
}

const dtpm = (dispatch) => {
  return {
    findAllQuizzes: () => {
      quizService.findAllQuizzes()
      .then(theQuizzes => dispatch({
        type: "FIND_ALL_QUIZZES",
        quizzes: theQuizzes
      }))
    }
  }
}

export default connect(stpm, dtpm) (Quizzes)