import React from 'react';
import { useField, FieldAttributes } from 'formik';

export const UnstyledSearchBar: React.FunctionComponent<FieldAttributes<
  any
>> = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <input
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
