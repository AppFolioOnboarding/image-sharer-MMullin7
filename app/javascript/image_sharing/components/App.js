import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { FormGroup, Label, Input, Button, Form } from 'reactstrap';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

@observer
class App extends Component {
  static propTypes = { store: PropTypes.shape(
    {
      userName: PropTypes.string,
      comments: PropTypes.string,
      updateComment: PropTypes.func,
      updateUsername: PropTypes.func
    }) };

  handleSubmit = () => {
  }

  updateCommentsValue = (event) => {
    this.props.store.updateComment(event.target.value);
  }

  updateNamesValue = (event) => {
    this.props.store.updateUsername(event.target.value);
  }

  render() {
    return (
      <Form className="container">
        <Header title="Tell us what you think" />
        <FormGroup>
          <Label for="name">Your name:</Label>
          <Input
            type="text"
            className="form-control"
            id="name"
            onChange={evt => this.updateNamesValue(evt)}
            value={this.props.store.userName}
          />
        </FormGroup>

        <FormGroup>
          <Label for="comments">Comments:</Label>
          <Input
            type="textarea"
            className="form-control"
            id="comments"
            onChange={evt => this.updateCommentsValue(evt)}
            value={this.props.store.comments}
          />
        </FormGroup>

        <Button color="primary" onClick={() => { this.handleSubmit(); }}>Submit</Button>
        <Footer />
      </Form>
    );
  }
}

export default App;
