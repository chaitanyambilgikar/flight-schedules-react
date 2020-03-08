import React from 'react';
import { mount } from 'enzyme';
import { HeaderNavigation } from './HeaderNavigation';
import { IHeaderItemType } from './header-navigation-types';
const headerItems: Array<IHeaderItemType> = [
  {
    label: {
      label: 'Lufthansa Flight App',
      labelcolor: '#ff9900',
      textcolor: 'white',
      labelwidth: 4,
      labelheight: 2,
      labelstartcolumn: 1,
      labelstartrow: 1,
      className: 'title-label',
    },
  },
  {
    label: {
      label: '|',
      labelcolor: '#ff9900',
      textcolor: 'white',
      labelwidth: 1,
      labelheight: 2,
      labelstartcolumn: 2,
      labelstartrow: 1,
      className: 'title-divider',
    },
  },
];
describe('--- HeaderNavigation ---', () => {
  it('should render header navigation items', () => {
    const headerNavigationWrapper = mount(
      <HeaderNavigation
        headerItems={headerItems}
        className='header-navigation'
      />,
    );
    expect(headerNavigationWrapper.hasClass('header-navigation')).toEqual(true);
    expect(headerNavigationWrapper.find('UnstyledLabel')).toHaveLength(2);
  });
});
