import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";

const TopicPills = (
    {
      topics=[],
      createTopic=() => alert("Create Topic"),
      deleteTopic = (item) => alert("Delete Topic " + item._id),
      updateTopic = (item) => alert("Update Topic")
    }) =>
    <div>
      <ul className="nav nav-pills">
        {
          topics.map(topics =>
            <li className="nav-item">
              <a className="nav-link">
                <EditableItem
                    item={topics}
                    deleteItem={deleteTopic}
                    updateItem={updateTopic}
                />
              </a>
            </li>
          )
        }
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-plus" onClick={createTopic}></i>
          </a>
        </li>
      </ul>
    </div>

const stpm = (state) => {
  return {
    topics: state.topicReducer.topics
  }
}

const dtpm = (dispatch) => {
  return {
    createTopic: () => dispatch({type: "CREATE_TOPIC"}),
    deleteTopic: (item) => dispatch({type: "DELETE_TOPIC", topicToDelete: item}),
    updateTopic: (topic) => dispatch({type: "UPDATE_TOPIC", topic})
  }
}

export default connect(stpm, dtpm) (TopicPills)