const initalState = {
  modules: [
    {_id: 123, title: "Module 123"},
    {_id: 124, title: "Module 124"},
    {_id: 125, title: "Module 125"}
  ]
}

const moduleReducer = (state = initalState, action) => {
  switch (action.type) {
    case "CREATE_MODULE":
    case "DELETE_MODULE":
    case "UPDATE_MODULE":
    default:
      return state
  }
}
export default moduleReducer