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
        timer : _this.state.timer+1
      })
    }, 1000);
  }

  render(){
    return(
      <div className="">
        <div className="background-image" style={{backgroundImage:'url(' + require('./../images/vishwanath.jpg') + ')'}}>
        </div>
        <div className="color-overlay"></div>
        <div className="profile-content col-xs-12 text-center">
            {this.state.timer}
            <div>
              <img className="pic-in-circle" src={require('./../images/vishwanath.jpg')}/>
            </div>
            <div className="">
              {this.props.data.selectedMember.name}
           </div>
          <span  onClick={this.stopCall} className="glyphicon glyphicon-earphone stop-call-button"  aria-hidden="true"></span>

         </div>
      </div>);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }
}

export default CallScreen;


