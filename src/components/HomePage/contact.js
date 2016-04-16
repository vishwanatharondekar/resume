import React, { PropTypes, Component } from 'react';

class Contact extends Component{
  render(){
    return(<div className="background-gray">
        <div id="contact" className="container">
          <h2>Contact</h2>
          <p className="lead">
            “Quote ”<br />- Quote By
          </p>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <ul className="no-bullets">
                <li>
                  <a href="http://twitter.com/vishwanath_a" target="_blank">
                    <span className="icon icon-twitter"></span>
                  http://twitter.com/vishwanath_a        </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/vishwanath-arondekar-615ab715" target="_blank">
                    <span className="icon icon-linkedin"></span>
                  https://www.linkedin.com/in/vishwanath-arondekar</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="no-bullets">
                <li>
                  <a href="javascript:void(0);">
                    <span className="icon icon-skype"></span>
                  vishwanatharondekar       </a>
                </li>
                <li>
                  <a href="mailto:vishwanatharondekar@gmail.com">
                    <span className="icon icon-email"></span>
                    <span>
                    vishwanatharondekar@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default Contact;
