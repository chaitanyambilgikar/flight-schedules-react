import React from 'react';
import styled from 'styled-components';

export const Item1 : React.FunctionComponent = styled.div`
  grid-column: col-start / span 12;
  background-color: grey;
  color: white;
`;

export const Item2 : React.FunctionComponent = styled.nav`
  grid-column: col-start / span 2;
  grid-row: 2 / 5;
  background-color: grey;
  color: white;
`;

export const Item3 : React.FunctionComponent = styled.div`
  grid-column: col-start 3 / span 10;
  grid-row: 2 / 5;
  background-color: grey;
  color: white;
`;
