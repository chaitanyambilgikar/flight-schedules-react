import React from 'react';
import styled from 'styled-components';
import ContentProps from './content-props';

const UnstyledContent : React.FunctionComponent<ContentProps> = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);

export const Content = styled(UnstyledContent)`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  background-color: grey;
  height: 100vh;
`