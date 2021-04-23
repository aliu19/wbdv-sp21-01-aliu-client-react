 import React, {useEffect} from 'react'
 import {connect} from 'react-redux'
 import {useParams} from 'react-router-dom'
 import widgetService from "../../services/widget-service"

 const WidgetList = (
     {
       widgets = [],
       findWidgetsForTopic = (tid) => console.log(tid)
     }
 ) => {

  const {topicId} = useParams()

  useEffect(() => {
    findWidgetsForTopic(topicId)
  }, [topicId])

  return(
      <div>
        <h2>Widget List {widgets.length}</h2>
        <ul className="list-group">
          {
            widgets.map(widget =>
                <li className="list-group-item" key={widget.id}>
                  {widget.type}
                </li>
            )
          }
        </ul>
      </div>
  )
 }

 const stpm = (state) => {
  return {
    widgets: state.widgetReducer.widgets
  }
 }

 const dtpm = (dispatch) => {
  return {
    findWidgetsForTopic: (tid) => {
      widgetService.findWidgetsForTopic(tid)
        .then(theWidgets => dispatch({
          type: "FIND_ALL_WIDGETS_FOR_TOPIC",
          widgets: theWidgets
        }))
    }
  }
 }

 export default connect(stpm, dtpm) (WidgetList)