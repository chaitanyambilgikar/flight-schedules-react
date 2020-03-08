import React from 'react';
import styled from 'styled-components';
import ILabelType from './label-type';

const UnstyledLabel: React.FunctionComponent<ILabelType> = ({
  label,
  onLabelClick,
  className,
  children,
  ...props
}) =>
  onLabelClick ? (
    <button className={className} onClick={onLabelClick} {...props}>
      <div>{label}</div>
      {children}
    </button>
  ) : (
    <div className={className} {...props}>
      {label}
      {children}
    </div>
  );

export const Label = styled(UnstyledLabel)`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.labelcolor || 'black'};
  color: ${props => props.textcolor || 'white'};
  grid-column: ${props =>
    `${props.labelstartcolumn} / span ${props.labelwidth}`};
  grid-row: ${props => `${props.labelstartrow} / span ${props.labelheight}`};
  border: ${props => props.labelborder || 'none'};
  font: ${props => props.labelfont || 'inherit'};
  cursor: ${props =>
    props.onLabelClick ? props.labelcursor || 'pointer' : 'inherit'};
  :hover {
    background-color: ${props =>
      props.onLabelClick ? props.labelhover || '#cc6600' : 'inherit'};
  }
  height: ${props => props.labelrelativeheight || '100%'};
  margin: 0px 15px;
`;
