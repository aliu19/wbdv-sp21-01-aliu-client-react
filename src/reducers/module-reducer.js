const initalState = {
  modules: []
}

const moduleReducer = (state = initalState, action) => {
  switch (action.type) {
    case "CREATE_MODULE":
      const newState = {
        modules: [
            ...state.modules,
            action.module
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
    case "FIND_MODULES_FOR_COURSE":
      return {
        ...state,
        modules: action.modules
      }
    default:
      return state
  }
}
export default moduleReducer