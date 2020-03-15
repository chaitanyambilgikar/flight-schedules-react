import React from 'react';
import styled from 'styled-components';
import { Form, FormikProps, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import SearchBar from '../SearchBar';

type FormType = {
  className?: string;
};
interface IFormValues {
  departureAirport: string;
  arrivalAirport: string;
}

const ScheduleSearchSchema = Yup.object().shape({
  departureAirport: Yup.string()
    .required('required'),
  arrivalAirport: Yup.string()
    .required('required')
});

const UnstyledForm: React.FunctionComponent<FormType> = ({
  className,
  ...props
}) => {
  const initialValues: IFormValues = { departureAirport: '', arrivalAirport: '' };
  return (
    <div className={className}>
      <h1>My Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={ScheduleSearchSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values: IFormValues, formikHelpers: FormikHelpers<IFormValues>) => {
          console.log('Values: ', values);
          formikHelpers.setSubmitting(false);
        }}
      >
        {(props: FormikProps<IFormValues>) => (
          <Form>
            <SearchBar
              name='departureAirport'
              type='search'
              placeholder='Departure Airport, eg: YYZ'
              maxLength={3}
              size={30}
            />
            {
              props.errors.departureAirport && props.touched.departureAirport ?
              <div>{props.errors.departureAirport}</div> : null
            }
            <SearchBar
              name='arrivalAirport'
              type='search'
              placeholder='Arrival Airport, egL LHR'
              maxLength={3}
              size={30}
            />
            {
              props.errors.arrivalAirport && props.touched.arrivalAirport ?
              <div>{props.errors.arrivalAirport}</div> : null
            }
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
