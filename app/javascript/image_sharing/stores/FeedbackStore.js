import { observable, action } from 'mobx';
import { post } from '../utils/helper';

class FeedbackStore {
  @observable userName = '';
  @observable comments = '';

  @action updateComment(comment) {
    this.comments = comment;
  }

  @action updateUsername(name) {
    this.userName = name;
  }

  @action postFeedbackData() {
    const path = '/api/feedbacks';
    post(path, {
      userName: this.userName,
      comments: this.comments
    });
  }
}

export default FeedbackStore;
