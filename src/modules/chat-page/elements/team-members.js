import React, { Component, PropTypes } from 'react';

class TeamMembers extends Component{
  render(){
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
                <li>{member.name}</li>
                )
            })
          }
          </ul>
        </div>
      </div>);
  }
}

export default TeamMembers;


