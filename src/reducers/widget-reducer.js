const initialState = {
  widgets: []
}

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_ALL_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgets
      }
    default:
      return state
  }
}
export default widgetReducer