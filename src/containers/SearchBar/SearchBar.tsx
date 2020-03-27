import React from 'react';
import { useField, FieldAttributes } from 'formik';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 5px;
  line-height: 2em;
  border: 1px solid #dddddd;
  border-radius: 5px;
`;

export const UnstyledSearchBar: React.FunctionComponent<FieldAttributes<
  any
>> = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <StyledInput
        {...field}
        {...props}
        onChange={e => {
          console.log('Value changed');
          field.onChange(e);
        }}
      />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};
