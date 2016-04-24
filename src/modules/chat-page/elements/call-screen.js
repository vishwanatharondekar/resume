import React, { Component, PropTypes } from 'react';
import ChatPageActions from './../actions/chat-page-actions';

class CallScreen extends Component{
  state = {
    timer : 0
  }

  stopCall(){
    ChatPageActions.showChat();
  }

  componentDidMount(){
    var _this = this;
    this.interval = setInterval( function(){
      _this.setState({
        times : _this.state.timer++
      })
    }, 1000)
  }

  render(){
    return(
      <div className="">
        {this.state.timer}
        <span onClick={this.stopCall}>Stop</span>
      </div>);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }
}

export default CallScreen;


