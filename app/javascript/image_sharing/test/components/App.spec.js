/* eslint-env mocha */
import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16/build/index';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import App from '../../components/App';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FeedbackStore from '../../stores/FeedbackStore';


configure({ adapter: new Adapter() });

describe('App.js', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App store={new FeedbackStore()} />);

    expect(wrapper.find(Header)).to.have.lengthOf(1);
    expect(wrapper.find(Header).prop('title')).to.equal('Tell us what you think');

    expect(wrapper.find(FormGroup)).to.have.lengthOf(2);
    const yourNameGroup = wrapper.find(FormGroup).at(0);
    expect(yourNameGroup.find(Label)).to.have.lengthOf(1);
    expect(yourNameGroup.find(Input)).to.have.lengthOf(1);
    expect(yourNameGroup.find(Label).prop('for')).to.equal('name');
    expect(yourNameGroup.find(Input).prop('type')).to.equal('text');
    expect(yourNameGroup.find(Input).prop('id')).to.equal('name');

    const commentsGroup = wrapper.find(FormGroup).at(1);
    expect(commentsGroup.find(Label)).to.have.lengthOf(1);
    expect(commentsGroup.find(Input)).to.have.lengthOf(1);

    expect(commentsGroup.find(Label).prop('for')).to.equal('comments');
    expect(commentsGroup.find(Input).prop('type')).to.equal('textarea');
    expect(commentsGroup.find(Input).prop('id')).to.equal('comments');

    expect(wrapper.find(Button)).to.have.lengthOf(1);
    expect(wrapper.find(Button).childAt(0).text()).to.equal('Submit');
    expect(wrapper.find(Footer)).to.have.lengthOf(1);
  });
});
