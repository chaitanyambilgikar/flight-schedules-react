import React from 'react';
import styled from 'styled-components';
import { Form, FormikProps, Formik } from 'formik';
import SearchBar from '../SearchBar';

type FormType = {
  className?: string;
};
interface IFormValues {
  departureAirport: string;
}
const UnstyledForm: React.FunctionComponent<FormType> = ({
  className,
  ...props
}) => {
  const initialValues: IFormValues = { departureAirport: 'YYZ' };
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
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const MyForm = styled(UnstyledForm)`
  grid-column: 4 / span 2;
  grid-row: 4;
`;
