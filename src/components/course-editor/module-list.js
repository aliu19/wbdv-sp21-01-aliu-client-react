import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import EditableItem from "../editable-item";
import moduleService from "../../services/module-service"

const ModuleList = (
    {
      myModules=[],
      createModule=() => alert("Create Module"),
      deleteModule = (item) => alert("Delete Module " + item._id),
      updateModule = (item) => alert("Update Module"),
      findModulesForCourse = (courseId) => console.log(courseId)
    }) => {

  const {courseId} = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
  }, [])

  return (
      <div>
        <ul className='list-group'>
          {
            myModules.map(module =>
                <li className="list-group-item">
                  <EditableItem
                      to={`/courses/editor/${courseId}/${module._id}`}
                      item={module}
                      deleteItem={deleteModule}
                      updateItem={updateModule}
                  />
                </li>
            )
          }
          <li className="list-group-item">
            <i className="fas fa-plus" onClick={() => createModule(courseId)}></i>
          </li>
        </ul>
      </div>
  )
}

const stpm = (state) => {
  return {
    myModules: state.moduleReducer.modules
  }
}

const dtpm = (dispatch) => {
  return {
    createModule: (courseId) => {
      moduleService.createModuleForCourse(courseId, {title: "New Module"})
        .then(theActualModule => dispatch({
          type: "CREATE_MODULE",
          module: theActualModule
        }))
    },
    deleteModule: (item) => {
      moduleService.deleteModule(item._id)
        .then(status => dispatch({
          type: "DELETE_MODULE",
          moduleToDelete: item
        }))
    },
    updateModule: (module) => {
      moduleService.updateModule(module._id, module)
        .then(status => dispatch({
          type: "UPDATE_MODULE",
          module
        }))
    },
    findModulesForCourse: (courseId) => {
      moduleService.findModulesForCourse(courseId)
        .then(theModules => dispatch({
          type: "FIND_MODULES_FOR_COURSE",
          modules: theModules
        }))
    }
  }
}

export default connect(stpm, dtpm) (ModuleList)