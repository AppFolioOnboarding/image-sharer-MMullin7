/* eslint-env mocha */
import { expect } from 'chai';
import sinon from 'sinon';
import * as helper from '../../utils/helper';

import FeedbackStore from '../../stores/FeedbackStore';

describe('FeedbackStore.js', () => {
  let feedbackStore;
  beforeEach(() => {
    feedbackStore = new FeedbackStore();
  });

  it('should test setters', () => {
    feedbackStore.updateComment('Comment Test');
    feedbackStore.updateUsername('User Test');

    expect(feedbackStore.comments).to.equal('Comment Test');
    expect(feedbackStore.userName).to.equal('User Test');
  });

  it('should call post with username and comments', () => {
    feedbackStore.updateComment('Comment Test');
    feedbackStore.updateUsername('User Test');

    const stub = sinon.stub(helper, 'post');

    feedbackStore.postFeedbackData();
    expect(stub.calledOnce).to.equal(true);

    const [path, postJSON] = stub.getCall(0).args;
    expect(path).to.equal('/api/feedbacks');
    expect(postJSON.userName).to.equal('User Test');
    expect(postJSON.comments).to.equal('Comment Test');
  });

  it('should have default values', () => {
    expect(feedbackStore.comments).to.equal('');
    expect(feedbackStore.userName).to.equal('');
  });
});
