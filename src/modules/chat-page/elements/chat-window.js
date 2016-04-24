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
    var selectedMember = this.props.data.selectedMember;
    var messages = selectedMember.messages;
    return(
      <div className="row chat-window-container">
          <div className="chat-window-header header">
            <span>{this.props.data.selectedMember.name}</span>
            <div className="buttons-container">
              <span className="glyphicon glyphicon-user" onClick={this.showProfile} aria-hidden="true"></span>
              <span className="glyphicon glyphicon-earphone" onClick={this.doCall} aria-hidden="true"></span>
              <span className="glyphicon glyphicon-envelope" onClick={this.doEmail} aria-hidden="true"></span>
            </div>
          </div>
          <div className="content">
          <ul className="messages">
          {
            messages.map(function(message){
              return (<li>
                <span>{selectedMember.name} :</span><span>{message.content}</span>
                </li>)
            })
          }
          </ul>

          </div>
          <div className="input-container">
            <input placeholder="Type a message..."/>
          </div>
      </div>);
  }
}

export default ChatWindow;


