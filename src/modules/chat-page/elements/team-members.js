import React, { Component, PropTypes } from 'react';
import ChatPageActions from './../actions/chat-page-actions';

class TeamMembers extends Component{
  render(){
    var selectedMember = this.props.data.selectedMember;
    return(
      <div className="row team-members-container">
        <div className="team-members-header header">
          Team Members
        </div>
        <div className="team-members content">
          <ul>
          {
            this.props.data.teamMembers.map(function(member){
              return (
                <TeamMember member={member} selectedMember={selectedMember}/>
                )
            })
          }
          </ul>
        </div>
      </div>);
  }
}

class TeamMember extends Component{
  selectMember(){
    ChatPageActions.selectConversation(this.props.member);
  }

  render(){
    return(
      <li onClick={this.selectMember.bind(this)} className={this.props.member==this.props.selectedMember?'selected':''}>{this.props.member.name}</li>
    )
  }
}

export default TeamMembers;


