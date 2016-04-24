import React, { Component, PropTypes } from 'react';
import ChatPageActions from './../actions/chat-page-actions';
class Profile extends Component{

  showChat(){
    ChatPageActions.showChat();
  }

  doCall(){
    ChatPageActions.doCall();
  }

  doEmail(){
    ChatPageActions.doEmail();
  }

  render(){
    return(
      <div className="profile-container">
          <div className="background-image" style={{backgroundImage:'url(' + require('./../images/vishwanath.jpg') + ')'}}>
          </div>
          <div className="color-overlay">
          </div>
          <div>
            <div className="back-to-chat">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span onClick={this.showChat}>Back</span>
            </div>

            <div className="profile-content col-xs-12 text-center">
              <div>
                <span className="glyphicon glyphicon-envelope" onClick={this.doEmail} aria-hidden="true"></span>
                <img className="pic-in-circle" src={require('./../images/vishwanath.jpg')}/>
                <span className="glyphicon glyphicon-earphone" onClick={this.doCall} aria-hidden="true"></span>
              </div>

              <div className="">
                {this.props.data.selectedMember.name}
              </div>
            </div>
          </div>
      </div>);
  }
}

export default Profile;


