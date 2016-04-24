import React, { Component, PropTypes } from 'react';
import TeamMembers from './team-members';
import LeftWindow from './left-window';

import styles from './../styles/chat.scss';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class Main extends Component{
  render(){
    return(
      <div>
        <div className="background-image" style={{backgroundImage:'url(' + require('./../images/vishwanath.jpg') + ')'}}>
        </div>
        <div className="main-container">
          <div className="col-xs-8 left-column">
            <LeftWindow {...this.props}/>
          </div>
          <div className="col-xs-4 right-column">
            <TeamMembers {...this.props}/>
          </div>
        </div>
      </div>);
  }
}

export default Main;


