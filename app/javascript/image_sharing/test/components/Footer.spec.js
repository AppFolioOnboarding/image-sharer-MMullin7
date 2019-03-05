/* eslint-env mocha */
import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Footer from '../../components/Footer';

configure({ adapter: new Adapter() });

describe('Footer.js', () => {
  it('should render footer', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('footer')).to.have.lengthOf(1);
    expect(wrapper.find('p').text()).to.equal('Copyright: Appfolio Inc. Onboarding');
  });
});

