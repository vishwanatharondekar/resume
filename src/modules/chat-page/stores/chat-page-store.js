import alt from '../../../alt';
import ChatPageActions from './../actions/chat-page-actions';

class ChatPageStore {
    constructor() {
        this.teamMembers = [{
          name : 'Vishwanath Arondekar'
        },{
          name : 'Ron'
        }];

        this.selectedMember = this.teamMembers[0];
        this.currentLeftPaneScreen = 'chat';


        this.bindListeners({
          handleShowProfile: ChatPageActions.SHOW_PROFILE,
          handleShowChat: ChatPageActions.SHOW_CHAT,
          handleDoCall: ChatPageActions.DO_CALL,
          handleDoEmail: ChatPageActions.DO_EMAIL,
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

}

export default alt.createStore(ChatPageStore, 'ChatPageStore');
