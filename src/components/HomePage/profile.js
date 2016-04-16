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
                    <strong>Location:</strong><br />
                  Mumbai    </p>

                </div>
              </div>
              <div className="col-md-8">
                <h3>About me</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>

            </div>
          </div>
      </div>)
  }
}

export default Profile;
