/* eslint-env mocha */
import { expect } from 'chai';
import FeedbackStore from '../../stores/FeedbackStore';

describe('FeedbackStore.js', () => {
  it('should test setters', () => {
    const feedbackStore = new FeedbackStore();
    feedbackStore.updateComment('Comment Test');
    feedbackStore.updateUsername('User Test');

    expect(feedbackStore.comments).to.equal('Comment Test');
    expect(feedbackStore.userName).to.equal('User Test');
  });
});
