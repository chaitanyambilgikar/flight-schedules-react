import React from "react";
import styled from 'styled-components'
const GridLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
`;

export default GridLayout;
