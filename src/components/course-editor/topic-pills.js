import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import EditableItem from "../editable-item";
import topicService from "../../services/topic-service"

const TopicPills = (
    {
      topics=[],
      createTopic=() => alert("Create Topic"),
      deleteTopic = (item) => alert("Delete Topic " + item._id),
      updateTopic = (item) => alert("Update Topic"),
      findTopicsForLesson = (lessonId) => console.log(lessonId)
    }) => {

  const {courseId, moduleId, lessonId} = useParams();
  useEffect(() => {
    if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
      findTopicsForLesson(lessonId)
    }
  }, [moduleId, lessonId])

  return (<div>
    <ul className="nav nav-pills">
      {
        topics.map(topic =>
            <li className="nav-item">
              <a className="nav-link">
                <EditableItem
                    to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                    item={topic}
                    deleteItem={deleteTopic}
                    updateItem={updateTopic}
                    key={topic._id}
                />
              </a>
            </li>
        )
      }
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-plus" onClick={() => createTopic(lessonId)}></i>
        </a>
      </li>
    </ul>
  </div>)
}

const stpm = (state) => {
  return {
    topics: state.topicReducer.topics
  }
}

const dtpm = (dispatch) => {
  return {
    createTopic: (lessonId) => {
      topicService.createTopic(lessonId, {title: "New Topic"})
        .then(theActualTopic => dispatch({
          type: "CREATE_TOPIC",
          topic: theActualTopic
        }))
    },
    deleteTopic: (item) => {
      topicService.deleteTopic(item._id)
        .then(status => dispatch({
          type: "DELETE_TOPIC",
          topicToDelete: item
        }))
    },
    updateTopic: (topic) => {
      topicService.updateTopic(topic._id, topic)
        .then(status => dispatch({
          type: "UPDATE_TOPIC",
          topic
        }))
    },
    findTopicsForLesson: (lessonId) => {
      topicService.findTopicsForLesson(lessonId)
        .then(theTopics => dispatch({
          type: "FIND_TOPICS_FOR_LESSON",
          topics: theTopics
      }))
    }
  }
}

export default connect(stpm, dtpm) (TopicPills)