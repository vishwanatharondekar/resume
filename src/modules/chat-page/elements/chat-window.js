import React, { Component, PropTypes } from 'react';
import ChatPageActions from './../actions/chat-page-actions';

class ChatWindow extends Component{

  showProfile(){
    ChatPageActions.showProfile();
  }

  doCall(){
    ChatPageActions.doCall();
  }

  doEmail(){
    ChatPageActions.doEmail();
  }

  render(){
    return(
      <div className="row">
          <div className="chat-window-header header">
            <span>{this.props.data.selectedMember.name}</span>
            <div className="buttons-container">
              <span className="glyphicon glyphicon-user" onClick={this.showProfile} aria-hidden="true"></span>
              <span className="glyphicon glyphicon-earphone" onClick={this.doCall} aria-hidden="true"></span>
              <span className="glyphicon glyphicon-envelope" onClick={this.doEmail} aria-hidden="true"></span>
            </div>
          </div>
          <div className="content">
            Chat messages here
          </div>
      </div>);
  }
}

export default ChatWindow;


