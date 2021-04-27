const QUIZZES_URL = 'https://boiling-mesa-73291.herokuapp.com/api/quizzes';

const findQuestionsForQuiz = (qid) => {
  return fetch(`${QUIZZES_URL}/${qid}/questions`)
  .then(response => response.json())
}

export default {
  findQuestionsForQuiz
}
