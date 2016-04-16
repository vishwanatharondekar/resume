import React, { PropTypes, Component } from 'react';


class Experiences extends Component{
  render(){
    return (<div id="experiences" className="container">
        <h2>Experiences</h2>
        <p className="lead">
            “The only source of knowledge is experience”<br />- Albert Einstein
        </p>
        <hr />

        <h3>Educations</h3>
        <div className="experiences">

          <div className="experience row">
            <div className="col-md-4">
              <h4>Mumbai University</h4>
              <p className="experience-period">
                July 2008        -
              May 2016      </p>
            </div>
            <div className="col-md-8">
              <p>
                <strong>Lorem Ipsum</strong>
                <span className="hidden-phone">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.              <span className="experience-details">
                  <span className="location">
                    <span className="glyphicon glyphicon-map-marker"></span>
                  Online
                </span>
                </span>
                </span>
              </p>
            </div>
          </div>
        </div>


        <hr />
        <h3>Careers</h3>
        <div className="experiences">


          <div className="experience row">
            <div className="col-md-4">
              <h4>Mumbai University</h4>
              <p className="experience-period">
                July 2008        -
              May 2016      </p>
            </div>
            <div className="col-md-8">
              <p>
                <strong>Lorem Ipsum</strong>
                <span className="hidden-phone">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.              <span className="experience-details">
                  <span className="location">
                    <span className="glyphicon glyphicon-map-marker"></span>
                  Online
                </span>
                </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default Experiences;
