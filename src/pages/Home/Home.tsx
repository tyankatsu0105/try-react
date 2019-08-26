import React, { FunctionComponent } from 'react';
import { useField, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';

interface Props {
  name: string;
  label: string;
  type: string;
}

const MyTextField: FunctionComponent<Props> = (props) => {
  const { label, ...restProps } = props;
  const [field, meta] = useField(restProps);
  const { touched, error } = meta;

  const handleError = touched && error ? true : false;

  return (
    <>
      <FormControl error={handleError}>
        <InputLabel htmlFor="my-input">{label}</InputLabel>
        <Input {...field} id="my-input" aria-describedby="my-helper-text" />

        <FormHelperText id="my-helper-text">
          {touched && error ? error : '入力してください'}
        </FormHelperText>
      </FormControl>
    </>
  );
};

const intialValues = { user: '', email: '' };
type Values = typeof intialValues;

const validationSchema = Yup.object().shape({
  user: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(10, 'Too Short!')
    .max(50, 'Too Long!')
    .email('lllllll')
    .required('Required'),
});

const Home = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={intialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={(props: FormikProps<Values>) => (
        <form onSubmit={props.handleSubmit} autoComplete="off">
          <MyTextField name="user" type="text" label="ユーザー名" />
          <MyTextField name="email" type="text" label="メールアドレス" />
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </div>
);

export default Home;
