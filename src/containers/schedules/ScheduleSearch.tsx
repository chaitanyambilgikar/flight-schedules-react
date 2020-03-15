import React from 'react';
import styled from 'styled-components';
import { Form, FormikProps, Formik } from 'formik';
import SearchBar from 'containers/SearchBar';

type FormType = {
  className?: string;
};
interface IFormValues {
  departureAirport: string;
  arrivalAirport: string;
}
const UnstyledScheduleSearchForm: React.FunctionComponent<FormType> = ({
  className,
  ...props
}) => {
  const initialValues: IFormValues = {
    departureAirport: '',
    arrivalAirport: '',
  };
  return (
    <div className={className}>
      <h1>My Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log('Values: ', values);
        }}
      >
        {(props: FormikProps<IFormValues>) => (
          <Form>
            <SearchBar
              name='departureAirport'
              type='search'
              placeholder='Departure Airport, eg: YYZ'
              maxLength={3}
            />
            <SearchBar
              name='arrivalAirport'
              type='search'
              placeholder='Arrival Airport, eg: LHR'
              maxLength={3}
            />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const ScheduleSearchForm = styled(UnstyledScheduleSearchForm)`
  grid-column: 4 / span 2;
  grid-row: 4;
`;
