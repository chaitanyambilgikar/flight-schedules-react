import React from 'react';
import styled from 'styled-components';
import IGridType from './grid-types';
const GridLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-template-rows: repeat(12, [row-start] 1fr);
  grid-gap: 10px;
`;

export const Grid: React.FunctionComponent<IGridType> = ({
  className,
  children,
  ...props
}) => (
  <GridLayout className={className} {...props}>
    {children}
  </GridLayout>
);
