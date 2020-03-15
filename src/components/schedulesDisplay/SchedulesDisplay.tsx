import React from 'react';
import styled from 'styled-components';
import { SchedulesDisplayType } from './schedules-display-types';
import { ScheduleSearchForm } from 'containers/schedules';

const UnstyledSchedulesDisplay: React.FunctionComponent<SchedulesDisplayType> = ({
  className,
  ...props
}) => {
  return (
    <div className={className}>
      <ScheduleSearchForm />
      <div>Hello</div>
    </div>
  );
};

export const SchedulesDisplay = styled(UnstyledSchedulesDisplay)`
  grid-column: 2 / span 10;
  grid-row: 3 / span 8;
  border: solid 1px black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;
