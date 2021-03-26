const initialState = {
  topics: [
    {_id: "1", title: "Topic 1"},
    {_id: "2", title: "Topic 2"},
    {_id: "3", title: "Topic 3"}
  ]
}

const topicReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_TOPIC":
      const newState = {
        topics: [
          ...state.topics,
          {
            _id: (new Date()).getTime(),
            title: "New Topic"
          }
        ]
      }
      return newState
    case "DELETE_TOPIC":
      const newState1 = {
        topics: state.topics.filter(topic => {
          if(topic._id === action.topicToDelete._id) {
            return false
          } else {
            return true
          }
        })
      }
      return newState1
    case "UPDATE_MODULE":
      return {
        topics: state.topics.map(t => {
          if(t._id === action.topic._id) {
            return action.topic
          } else {
            return t
          }
        })
      }
    default:
      return state
  }
}
export default topicReducer