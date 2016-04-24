import React, { Component, PropTypes } from 'react';
import ChatPageActions from './../actions/chat-page-actions';
class Profile extends Component{

  showProfile(){
    ChatPageActions.showChat();
  }
  render(){
    return(
      <div className="profile-container">
          <div className="background-image" style={{backgroundImage:'url(' + require('./../images/vishwanath.jpg') + ')'}}>
          </div>
          <div className="color-overlay"></div>
          <div className="profile-content">
            <div>
              <img className="pic-in-circle" src={require('./../images/vishwanath.jpg')}/>
            </div>
            <div className="">
              <span onClick={this.showProfile}>Back</span>
            </div>
            <div className="">
              Profile screen here
           </div>
         </div>
      </div>);
  }
}

export default Profile;


