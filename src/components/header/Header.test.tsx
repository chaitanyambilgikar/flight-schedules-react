import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('--- Header ---', () => {
  it('should have a className of "header"', () => {
    const headerWrapper = shallow(<Header className='header' />);
    expect(headerWrapper.hasClass('header')).toEqual(true);
  });
});
