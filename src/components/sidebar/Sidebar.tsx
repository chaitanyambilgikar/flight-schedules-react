import React, { ReactElement } from 'react';
import styled from 'styled-components';
import SidebarProps from './sidebar-props';

const renderSidebarItems : (items : Array<string>) => Array<ReactElement> = (items) => {
  return items.map(item => <li className="list-item" key={`sidebar-${item}`}>{item}</li>)
}

const StyledList = styled.ul`
  list-style: none;
`;
const UnstyledSidebar: React.FunctionComponent<SidebarProps> = ({
  items,
  children,
  ...props
}) => (
    <StyledList className={props.className}>{renderSidebarItems(items)}</StyledList>
);

export const Sidebar = styled(UnstyledSidebar)`
  grid-column: col-start / span 2;
  grid-row: 2 / 14;
  background-color: grey;
  color: white;
`;