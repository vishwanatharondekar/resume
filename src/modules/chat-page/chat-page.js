import React, { Component, PropTypes } from 'react';
import Main from './elements/main';
import ChatPageStore from './stores/chat-page-store';
import AltContainer from 'alt/AltContainer';

class ChatPage extends Component{
  render(){

    return (
            <div className="chat-page">
                <AltContainer
                    stores={
                        {
                          data: ChatPageStore
                        }
                      }
                    >
                    <Main {...this.props} />
                </AltContainer>
            </div>
        );
  }
}

export default ChatPage;


