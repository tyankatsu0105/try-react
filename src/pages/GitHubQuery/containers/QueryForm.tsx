import React, { FunctionComponent } from 'react';

import { useQuery } from '@apollo/react-hooks';
import gqlGetOrganization from './api/GetOrganization.graphql';
import {
  GetOrganization,
  GetOrganizationVariables,
} from './api/__generated__/GetOrganization';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormGroup,
  Button,
  Box,
  Typography,
  CircularProgress,
  Divider,
  Link,
} from '@material-ui/core';

interface FormValues {
  login: string;
  first: number;
}

// import { QueryFormComponent } from '../components';

export const QueryForm: FunctionComponent = () => {
  const variables: GetOrganizationVariables = {
    login: '',
    first: 0,
  };
  const { loading, data, refetch } = useQuery<GetOrganization>(
    gqlGetOrganization,
    {
      variables,
    }
  );

  const { values, errors, touched, handleChange, handleSubmit } = useFormik<
    FormValues
  >({
    initialValues: {
      login: '',
      first: 1,
    },
    validationSchema: Yup.object().shape({
      login: Yup.string().required('入力必須'),
      first: Yup.number()
        .min(1)
        .required('入力必須'),
    }),
    onSubmit: (values) => {
      refetch(values);
    },
  });
  return (
    <>
      {/* <QueryFormComponent /> */}
      <form action="" onSubmit={handleSubmit} autoComplete="off">
        <FormGroup>
          <Box marginTop={2}>
            <FormControl error={touched.login && errors.login ? true : false}>
              <InputLabel htmlFor="login">organization</InputLabel>
              <Input
                type="input"
                name="login"
                value={values.login}
                id="login"
                aria-describedby="input-login"
                onChange={handleChange}
              />

              <FormHelperText id="login">
                {touched.login && errors.login
                  ? errors.login
                  : 'organization名を入力'}
              </FormHelperText>
            </FormControl>
          </Box>

          <Box marginTop={2}>
            <FormControl error={touched.first && errors.first ? true : false}>
              <InputLabel htmlFor="first">organization</InputLabel>
              <Input
                type="number"
                name="first"
                value={values.first}
                id="first"
                aria-describedby="input-first"
                onChange={handleChange}
              />

              <FormHelperText id="first">
                {touched.first && errors.first
                  ? errors.first
                  : '表示するレポジトリ数を入力'}
              </FormHelperText>
            </FormControl>
          </Box>

          <Box marginTop={2} display="flex" justifyContent="center">
            <Button type="submit" variant="contained" color="primary">
              submit
            </Button>
          </Box>
        </FormGroup>
      </form>

      {loading && (
        <>
          <CircularProgress></CircularProgress>
        </>
      )}

      {data &&
        data.organization &&
        data.organization.repositories &&
        data.organization.repositories.nodes && (
          <>
            {data.organization.repositories.nodes.map((node) => {
              return (
                node && (
                  <>
                    <Box marginTop={1}>
                      <Link href={node.url}>
                        <Typography variant="h2">{node.name}</Typography>
                      </Link>
                      <Typography paragraph={true}>
                        {node.description}
                      </Typography>
                    </Box>
                    <Divider />
                  </>
                )
              );
            })}
          </>
        )}
    </>
  );
};
