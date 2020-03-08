import React from 'react';
import { mount } from 'enzyme';
import { Label } from './Label';

describe('--- Label ---', () => {
  it('should display a div when no onLabelClick handler is passed', () => {
    const labelWrapper = mount(
      <Label
        label='label'
        labelcolor='#ff9900'
        textcolor='white'
        labelwidth={2}
        labelheight={1}
        labelstartcolumn={1}
        labelstartrow={1}
        className='label'
      />,
    );
    expect(labelWrapper.hasClass('label')).toEqual(true);
    expect(labelWrapper.find('div')).toHaveLength(1);
    expect(labelWrapper.find('button')).toHaveLength(0);
  });

  it('should display a button when onLabelClick handler is passed', () => {
    const labelWrapper = mount(
      <Label
        label='label'
        labelcolor='#ff9900'
        textcolor='white'
        labelwidth={2}
        labelheight={1}
        labelstartcolumn={1}
        labelstartrow={1}
        className='label'
        labelrelativeheight='100%'
        labelborder='none'
        labelfont='inherit'
        labelcursor='pointer'
        onLabelClick={() => {
          console.log('label clicked');
        }}
      />,
    );
    expect(labelWrapper.hasClass('label')).toEqual(true);
    expect(labelWrapper.find('button')).toHaveLength(1);
  });
});
