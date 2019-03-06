import { observable, action } from 'mobx';
import { post } from '../utils/helper';

export class FlashMessage {
  constructor(message, color) {
    this.message = message;
    this.color = color;
  }
}

export default class FeedbackStore {
  @observable userName = '';
  @observable comments = '';
  @observable flashMessage = null;

  @action updateComment(comment) {
    this.comments = comment;
  }

  @action updateUsername(name) {
    this.userName = name;
  }

  @action updateFlash(message, color) {
    this.flashMessage = new FlashMessage(message, color);
  }

  @action postFeedbackData() {
    const path = '/api/feedbacks';

    if (
      this.userName.trim().length === 0 ||
      this.comments.trim().length === 0
    ) {
      this.updateFlash('Failed to post comment!', 'danger');
      return Promise.resolve();
    }

    return post(path, {
      userName: this.userName,
      comments: this.comments
    }).then(() => {
      this.updateFlash('Successfully Commented!', 'success');
      this.updateComment('');
      this.updateUsername('');
    });
  }
}
