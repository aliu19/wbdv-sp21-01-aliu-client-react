 import React, {useEffect} from 'react'
 import {connect} from 'react-redux'
 import {useParams} from 'react-router-dom'
 import widgetService from "../../services/widget-service"
 import HeadingWidget from "./heading-widget";
 import ParagraphWidget from "./paragraph-widget";

 const WidgetList = (
     {
       widgets = [],
       findWidgetsForTopic = (topicId) => console.log(tid),
       createWidget = (topicId) => console.log("Create Widget " + tid)
     }
 ) => {

  const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams()

  useEffect(() => {
    findWidgetsForTopic(topicId)
  }, [courseId, moduleId, lessonId, topicId])

  return(
      <div>
        <i className="fas fa-plus fa-2x float-right" onClick={() => createWidget(topicId)}></i>
        <h2>Widget List {widgets.length}</h2>
        <ul className="list-group">
          {
            widgets.map(widget =>
                <li className="list-group-item" key={widget.id}>
                  {
                    widget.type === "HEADING" && <HeadingWidget widget={widget}/>
                  }
                  {
                    widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget}/>
                  }
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
    findWidgetsForTopic: (topicId) => {
      widgetService.findWidgetsForTopic(topicId)
        .then(theWidgets => dispatch({
          type: "FIND_ALL_WIDGETS_FOR_TOPIC",
          widgets: theWidgets
        }))
    }
  }
 }

 export default connect(stpm, dtpm) (WidgetList)