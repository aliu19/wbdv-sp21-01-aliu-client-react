import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";

const TopicPills = ({topics=[]}) =>
    <div>
      <ul className="nav nav-pills">
        {
          topics.map(topics =>
            <li className="nav-item">
              <a className="nav-link">
                <EditableItem item={topics}/>
              </a>
            </li>
          )
        }
      </ul>
    </div>

const stpm = (state) => {
  return {
    topics: state.topicReducer.topics
  }
}

const dtpm = (dispatch) => {

}

export default connect(stpm, dtpm) (TopicPills)