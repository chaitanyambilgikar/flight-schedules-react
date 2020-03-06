import React from 'react';
import styled from 'styled-components';
import HeaderType from './header-types';

const UnstyledHeader: React.FunctionComponent<HeaderType> = ({
  className,
  children,
  ...props
}) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export const Header = styled(UnstyledHeader)`
  grid-column: 1 / span 12;
  grid-row: 1;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #ff9900;
`;
