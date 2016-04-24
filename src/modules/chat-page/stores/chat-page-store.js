import alt from '../../../alt';
import ChatPageActions from './../actions/chat-page-actions';

class ChatPageStore {
    constructor() {
        this.teamMembers = [{
          id : 1,
          name : 'Vishwanath Arondekar',
          messages : [
            {
              userId : 1,
              content : "This is message from Vishwanath"
            }
          ]
        },{
          id : 2,
          name : 'Alan Jenson',
          messages : [
            {
              userId : 2,
              content : "This is message from Alan"
            }
          ]
        },{
          id : 3,
          name : 'Eugene Simpson',
          messages : [
            {
              userId : 3,
              content : "This is message from Eugene"
            }
          ]
        },{
          id : 4,
          name : 'Thomsa Morgan',
          messages : [
            {
              userId : 4,
              content : "This is message from Thomsa"
            }
          ]
        },{
          id : 5,
          name : 'Hamish Labatt',
          messages : [
            {
              userId : 5,
              content : "This is message from Hamish"
            }
          ]
        },{
          id : 6,
          name : 'Katy Perry',
          messages : [
            {
              userId : 6,
              content : "This is message from Katy"
            }
          ]
        },{
          id : 7,
          name : 'Will Jenson',
          messages : [
            {
              userId : 7,
              content : "This is message from Will"
            }
          ]
        },
        ];

        this.selectedMember = this.teamMembers[0];
        this.currentLeftPaneScreen = 'chat';


        this.bindListeners({
          handleShowProfile: ChatPageActions.SHOW_PROFILE,
          handleShowChat: ChatPageActions.SHOW_CHAT,
          handleDoCall: ChatPageActions.DO_CALL,
          handleDoEmail: ChatPageActions.DO_EMAIL,
          handleSelectConversation: ChatPageActions.SELECT_CONVERSATION
        });
    }

    handleShowProfile(){
        this.currentLeftPaneScreen = 'profile';
    }

    handleDoCall(){
        this.currentLeftPaneScreen = 'call';
    }

    handleDoEmail(){
        //this.currentLeftPaneScreen = 'profile';
    }

    handleShowChat(){
        this.currentLeftPaneScreen = 'chat';
    }

    handleSelectConversation(member){
      this.selectedMember = member;
      this.currentLeftPaneScreen = 'chat';
    }

}

export default alt.createStore(ChatPageStore, 'ChatPageStore');
