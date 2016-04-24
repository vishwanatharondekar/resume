import alt from '../../../alt';

class ChatPageActions {
    dummy(){
        this.dispatch();
    }

    showProfile(){
      this.dispatch();
    }

    showChat(){
      this.dispatch();
    }

    doCall(){
      this.dispatch();
    }

    doEmail(){
      this.dispatch();
    }

    selectConversation(member){
      this.dispatch(member);
    }
}
export default alt.createActions(ChatPageActions);
