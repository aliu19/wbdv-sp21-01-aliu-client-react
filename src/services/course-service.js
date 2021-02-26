const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001311078/courses"

export const createCourse = (course) =>
    fetch(COURSES_URL, {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const findAllCourses = () =>
  fetch(COURSES_URL)
    .then(response => response.json())

export const findCourseById = (id) =>
    fetch(`${COURSES_URL}/${id}`)
      .then(response => response.json())

export const updateCourse = (id, course) =>
    fetch(`${COURSES_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const deleteCourse = (id) =>
    fetch(`${COURSES_URL}/${id}`, {
      method: 'DELETE'
    })
        .then(response => response.json())

export default {
  createCourse,
  findAllCourses,
  findCourseById,
  updateCourse,
  deleteCourse
}