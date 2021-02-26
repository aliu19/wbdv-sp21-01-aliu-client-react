import React from 'react'

const CourseEditor = ({history}) => {
  return (
      <div className="container-fluid pull-left">

        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-secondary">
          <button className="btn btn-primary btn-lg">
            <i onClick={() => history.goBack()} className="fas fa-arrow-left"></i>
          </button>
          <span className="col-2 wbdv-nav-title">
            CS5610 - WebDev
          </span>

          <button className="navbar-toggler" type="button"
                  data-toggle="collapse" data-target="#navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="col-10 collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav wbdv-justify-navbar">
              <li className="nav-item">
                <a className="nav-link disabled wbdv-navbar-font" href="#">
                  Build
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active wbdv-navbar-font" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled wbdv-navbar-font" href="#">
                  Theme
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled wbdv-navbar-font" href="#">
                  Store
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled wbdv-navbar-font" href="#">
                  Apps
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled wbdv-navbar-font" href="#">
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled wbdv-navbar-font" href="#">
                  <i className="fa fa-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row wbdv-pad-top">
          <div className="col-4 bg-dark">
            <ul className="list-group">
              <br/>
                <li className="list-group-item wbdv-modules">
                  Module 1 - jQuery
                  <i className="fa-pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item list-group-item-action active wbdv-modules">
                  Module 2 - React
                  <i className="fa-pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item wbdv-modules">
                  Module 3 - Redux
                  <i className="fa-pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item wbdv-modules">
                  Module 4 - Native
                  <i className="fa-pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item wbdv-modules">
                  Module 5 - Angular
                  <i className="fa-pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item wbdv-modules">
                  Module 6 - Node
                  <i className="fa-pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item wbdv-modules">
                  Module 7 - Mongo
                  <i className="fa-pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item bg-dark list-group-item-action wbdv-modules">
                  <i className="fa-pull-right fa fa-plus"></i>
                </li>
            </ul>
          </div>

          <div className="col-8">
            <ul className="nav nav-pills">
              <li className="nav-item wbdv-topics">
                <a className="nav-link disabled" href="#">
                  Topic 1
                </a>
              </li>
              <li className="nav-item wbdv-topics">
                <a className="nav-link active" href="#">
                  Topic 2
                </a>
              </li>
              <li className="nav-item wbdv-topics">
                <a className="nav-link disabled" href="#">
                  Topic 3
                </a>
              </li>
              <li className="nav-item wbdv-topics">
                <a className="nav-link disabled" href="#">
                  Topic 4
                </a>
              </li>
              <li className="nav-item wbdv-topics">
                <a className="nav-link disabled" href="#">
                  <i className="fa fa-plus"></i>
                </a>
              </li>
            </ul>
          </div>

        </div>


      </div>
)
}
export default CourseEditor