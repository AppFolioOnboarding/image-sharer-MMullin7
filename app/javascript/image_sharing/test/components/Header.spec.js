/* eslint-env mocha */
import 'jsdom-global/register';
import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/Header';

configure({ adapter: new Adapter() });

describe('Header.js', () => {
  it('should render header', () => {
    const wrapper = shallow(<Header title='Tell us what you think' />);

    expect(wrapper.find('h1')).to.have.lengthOf(1);
    expect(wrapper.find('h1').text()).to.equal('Tell us what you think');
  });
});

