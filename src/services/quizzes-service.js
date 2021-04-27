const QUIZZES_URL = 'https://boiling-mesa-73291.herokuapp.com/api/quizzes';

const findAllQuizzes = () => {
  return fetch(QUIZZES_URL)
  .then(response => response.json())
}

const findQuizById = (qid) => {
  return fetch(`${QUIZZES_URL}/${qid}`)
  .then(response => response.json())
}

const submitQuiz = (quizId, questions) => {
  fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
    method: 'POST',
    body: JSON.stringify(questions),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
  .then(result => console.log(result))
}

const findAttemptsForQuiz = (quizId) => {
  return fetch(`${QUIZZES_URL}/${quizId}/attempts`)
  .then(response => response.json())
}

export default {
  findAllQuizzes,
  findQuizById,
  submitQuiz,
  findAttemptsForQuiz
}