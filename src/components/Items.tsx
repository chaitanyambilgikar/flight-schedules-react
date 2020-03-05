import React from 'react';
import styled from 'styled-components';


export const Sidebar : React.FunctionComponent = styled.nav`
  grid-column: col-start / span 2;
  grid-row: 2 / 14;
  background-color: grey;
  color: white;
`;

export const Content : React.FunctionComponent = styled.div`
  grid-column: col-start 3 / span 10;
  grid-row: 2 / 14;
  background-color: grey;
  color: white;
`;
