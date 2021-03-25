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
      const newState = {
        modules: [
            ...state.modules,
            {
              _id: (new Date()).getTime(),
              title: "New Module"
            }
        ]
      }
      return newState
    case "DELETE_MODULE":
      const newState1 = {
        modules: state.modules.filter(module => {
          if(module._id === action.moduleToDelete._id) {
            return false
          } else {
            return true
          }
        })
      }
      return newState1
    case "UPDATE_MODULE":
      return {
        modules: state.modules.map(m => {
          if(m._id === action.module._id) {
            return action.module
          } else {
            return m
          }
        })
      }
    default:
      return state
  }
}
export default moduleReducer