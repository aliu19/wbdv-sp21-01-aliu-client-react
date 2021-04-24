const TOPICS_URL = "https://still-garden-14584.herokuapp.com/api/topics"
const WIDGETS_URL = "https://still-garden-14584.herokuapp.com/api/widgets"

export const createWidget = (tid, widget) =>
    fetch(`${TOPICS_URL}/${tid}/widgets`, {
      method: "POST",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`${TOPICS_URL}/${tid}/widgets`)
      .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGETS_URL}/${wid}`, {
      method: "DELETE"
    })
    .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGETS_URL}/${wid}`, {
      method: "PUT",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export default {
  createWidget,
  findWidgetsForTopic,
  deleteWidget,
  updateWidget
}