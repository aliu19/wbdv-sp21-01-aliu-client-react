import React from 'react'
import {connect} from 'react-redux'

const TopicPills = ({topics=[]}) =>
    <div>
      <ul className="nav nav-pills">
        {
          topics.map(topics =>
            <li className="nav-item">
              <a className="nav-link">
                {topics.title}
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