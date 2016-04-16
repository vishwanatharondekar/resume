import React, { PropTypes, Component } from 'react';


class Abilities extends Component{
  render(){
    return(<div className="background-white">
      <div id="abilities" className="container">
        <h2>Abilities</h2>
        <p className="lead">
          “Quote”<br />- Quote By
        </p>
        <hr />
        <h3>Skills</h3>
        <div className="row">

          <div className="col-md-6">
            <ul className="no-bullets">
              <li>
                <span className="ability-title">CSS(3)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                </span>
              </li>
              <li>
                <span className="ability-title">HTML(5)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="no-bullets">
              <li>
                <span className="ability-title">React</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star "></span>
                </span>
              </li>
              <li>
                <span className="ability-title">Angular</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star "></span>
                </span>
              </li>
            </ul>
          </div>


        </div>
        <div className="text-center project-referal">
          <p>This project is built on react starter kit.</p>
          <a href="https://github.com/vishwanatharondekar/resume" className="btn btn-primary" target="_blank">See project on Github</a>
        </div>
        <hr />
        <h3>Languages</h3>
        <div className="row">

          <div className="col-md-6">
            <ul className="no-bullets">
              <li>
                <span className="ability-title">Marathi (Mother tongue)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="no-bullets">
              <li>
                <span className="ability-title">English (Daily use)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <h3>Tools</h3>
        <div className="row">
          <div className="col-md-6">
            <ul className="no-bullets">

              <li>
                <span className="ability-title">Sublime Text (2 years)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star "></span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="no-bullets">
              <li>
                <span className="ability-title">Sublime Text (2 years)</span>
                <span className="ability-score">
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star filled"></span>
                  <span className="glyphicon glyphicon-star "></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
  )
  }
}

export default Abilities;
