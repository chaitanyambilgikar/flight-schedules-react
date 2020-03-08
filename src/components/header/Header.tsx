import React from 'react';
import styled from 'styled-components';
import IHeaderType from './header-types';

const UnstyledHeader: React.FunctionComponent<IHeaderType> = ({
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
  background-color: #ff9900;
`;
