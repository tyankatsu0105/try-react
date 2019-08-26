import React, { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';

interface FormValues {
  user: string;
}

const Home: FunctionComponent = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik<
    FormValues
  >({
    initialValues: {
      user: '',
    },
    validationSchema: Yup.object().shape({
      user: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('入力必須'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl error={touched.user && errors.user ? true : false}>
          <InputLabel htmlFor="my-input">ユーザー名</InputLabel>
          <Input
            type="input"
            name="user"
            value={values.user}
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={handleChange}
          />

          <FormHelperText id="my-helper-text">
            {touched.user && errors.user
              ? errors.user
              : 'ユーザー名を入力してください'}
          </FormHelperText>
        </FormControl>

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Home;
