import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  /* Add Prop Types check*/
  render() {
    return (
      <div className="container">
        <Header title="Tell us what you think" />
        <FormGroup>
          <Label for="name">Your name:</Label>
          <Input type="text" className="form-control" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="comments">Comments:</Label>
          <Input type="textarea" className="form-control" id="comments" />
        </FormGroup>

        <Button color="primary">Submit</Button>
        <Footer />
      </div>
    );
  }
}

export default inject(
  'stores'
)(App);
