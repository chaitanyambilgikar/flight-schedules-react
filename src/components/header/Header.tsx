import React from 'react';
import styled from 'styled-components';
import HeaderProps from './header-props';

const UnstyledHeader : React.FunctionComponent<HeaderProps> = (props) => (
  <div className={props.className}>
    {props.children}
  </div>
);

export const Header = styled(UnstyledHeader)`
  grid-column: col-start / span 12;
  background-color: grey;
  color: ${props => props.textColor};
`;