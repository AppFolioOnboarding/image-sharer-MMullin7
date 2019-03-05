import { observable } from 'mobx';

class FeedbackStore {
  @observable userName = '';
  @observable comments = '';

  updateComment(comment) {
    this.comments = comment;
  }

  updateUsername(name) {
    this.userName = name;
  }
}

export default FeedbackStore;
