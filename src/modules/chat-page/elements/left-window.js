import React, { Component, PropTypes } from 'react';
import ChatWindow from './chat-window';
import Profile from './profile';
import CallScreen from './call-screen';

var screenComponentsMap = {
  chat : ChatWindow,
  profile : Profile,
  call: CallScreen
}

class LeftWindow extends Component{
  render(){
    var screenToRender = this.props.data.currentLeftPaneScreen || 'chat';
    var ScreenComponent = screenComponentsMap[screenToRender]


    return(
      <div className="">
        <ScreenComponent {...this.props}/>
      </div>);
  }
}

export default LeftWindow;
