import React from 'react';
import { mount } from 'enzyme';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('Renders the list items correctly', () => {
    const sidebarWrapper = mount(
      <Sidebar
        className="sidebar"
        items={['item1', 'item2']}
      />
    );
    expect(sidebarWrapper.hasClass('sidebar')).toEqual(true);
    expect(sidebarWrapper.find('.sidebar')).toBeDefined();
    expect(sidebarWrapper.find('.list-item')).toHaveLength(2);
  });
})