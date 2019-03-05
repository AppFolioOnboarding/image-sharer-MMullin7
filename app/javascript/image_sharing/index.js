import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import FeedbackStore from './stores/FeedbackStore';

/* Initialize your store here*/

ReactDOM.render(
  <App store={new FeedbackStore()} />,
  document.getElementById('feedback-root')
);
