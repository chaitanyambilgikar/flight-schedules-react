import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from './Grid';

describe('--- Grid ---', () => {
  it('should have a className of "grid"', () => {
    const gridWrapper = shallow(<Grid className='grid' />);
    expect(gridWrapper.hasClass('grid')).toEqual(true);
  });
});
