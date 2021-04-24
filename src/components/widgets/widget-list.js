 import React, {useEffect, useState} from 'react'
 import {connect} from 'react-redux'
 import {useParams} from 'react-router-dom'
 import widgetService from "../../services/widget-service"
 import HeadingWidget from "./heading-widget";
 import ParagraphWidget from "./paragraph-widget";

 const WidgetList = (
     {
       widgets = [],
       findWidgetsForTopic = (topicId) => console.log(topicId),
       createWidget = (topicId) => console.log("Create Widget " + topicId),
       deleteWidget = (widget) => console.log("Delete Widget " + widget.id),
       updateWidget = (wid, widget) => console.log("Update Widget " + wid)
     }
 ) => {

  const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams();

  useEffect(() => {
    findWidgetsForTopic(topicId)
  }, [courseId, moduleId, lessonId, topicId])

  return(
      <div>
        <i className="fas fa-plus fa-2x float-right" onClick={() => createWidget(topicId)}></i>
        <ul className="list-group">
          {
            widgets.map(widget =>
                <li className="list-group-item" key={widget.id}>
                  {
                    widget.type === "HEADING" &&
                    <HeadingWidget
                        widget={widget}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        key={widget.id}
                    />
                  }
                  {
                    widget.type === "PARAGRAPH" &&
                    <ParagraphWidget
                        widget={widget}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        key={widget.id}
                    />
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
    createWidget: (topicId) => {
      widgetService.createWidget(topicId, {type: "HEADING", size: 1, text:"New Widget"})
        .then(theActualWidget => dispatch({
          type: "CREATE_WIDGET",
          widget: theActualWidget
        }))
    },
    findWidgetsForTopic: (topicId) => {
      widgetService.findWidgetsForTopic(topicId)
        .then(theWidgets => dispatch({
          type: "FIND_ALL_WIDGETS_FOR_TOPIC",
          widgets: theWidgets
        }))
    },
    updateWidget: (wid, widget) => {
      widgetService.updateWidget(wid, widget)
        .then(status => dispatch({
          type: "UPDATE_WIDGET",
          widget
        }))
    },
    deleteWidget: (widget) => {
      widgetService.deleteWidget(widget.id)
        .then(status => dispatch({
          type: "DELETE_WIDGET",
          widgetToDelete: widget
        }))
    }
  }
 }

 export default connect(stpm, dtpm) (WidgetList)