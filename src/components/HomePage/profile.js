import React, { PropTypes, Component } from 'react';

class Profile extends React.Component{
  render(){
    return(
      <div className="background-white">
        <div id="profile" className="container">
            <h2>Profile</h2>
            <p className="lead">Pro web developer with a pinch of everything else</p>
            <hr />
            <div className="row">

              <div className="col-md-4">
                <img src={require("./vishwanath.jpg")} alt="Vishwanath Arondekar" width="246" height="246" />

                <div className="">
                  <p>
                    <strong>Name:</strong>
                    Vishwanath Arondekar<br />
                    <strong>Age:</strong>
                    29 years<br />
                    <strong>Location:</strong>
                  Mumbai
                  </p>

                </div>
              </div>
              <div className="col-md-8">
                <h3>About me</h3>
                <p>
                  Programmer by heart who have been in multiple roles like Team leader, Manager, Frontend Architect over the career of seven years. Enjoys programming as much as getting involved in all phases of projects for planning to deployment. Capable of taking project from ideation to production deployemnt. Love working in a team.
                </p>
                </div>

            </div>
          </div>
      </div>)
  }
}

export default Profile;
