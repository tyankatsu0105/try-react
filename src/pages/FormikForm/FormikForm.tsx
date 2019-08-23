import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import { render } from '@testing-library/react';
import * as Yup from 'yup';

const initialValues = {
  user: 'tyankatsu',
  email: 'hogehoge@fugafuga.piyo',
  social: {
    facebook: 'tyankatsu-facebook',
    twitter: 'tyankatsu-twitter',
  },
};

const validationSchema = Yup.object().shape({
  user: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .email('lllllll')
    .required('Required'),
});

const FormikForm: FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>This is FormikForm</title>
      </Helmet>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
        render={({ status, isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="text" className="error" name="social.facebook" />
            <ErrorMessage name="social.facebook">
              {(errorMessage) => <div className="error">{errorMessage}</div>}
            </ErrorMessage>
            <Field type="text" name="social.twitter" />
            <ErrorMessage
              name="social.twitter"
              className="error"
              component="div"
            />
            {status && status.msg && <div>{status.msg}</div>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      ></Formik>
    </>
  );
};

export default FormikForm;
