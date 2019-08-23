import React, { FunctionComponent, FormEvent } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Form as GForm,
  FormField,
  TextInput,
  TextArea,
  Button,
} from 'grommet';

const initialValues = {
  name: '',
  description: '',
  email: '',
};

interface InitialValues {
  value: {
    name: string;
    description: string;
    email: string;
  };
}

const nameValidation = { regexp: /\w{1,}/, message: '文字列のみ' };
const descriptionValidation = {
  regexp: /hoge/,
  message: 'hogeのみ受け付けます',
};
const emailValidation = {
  regexp: /[^\s]@[^\s]/,
  message: '正しいものをば',
};

const printValues = (event: FormEvent<HTMLFormElement> & InitialValues) =>
  console.log(event.value);

const DummyForm: FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>This is DummyForm</title>
      </Helmet>

      <GForm onSubmit={printValues} value={initialValues}>
        <FormField
          label="名前"
          name="name"
          placeholder="田中　太郎"
          component={TextInput}
          validate={nameValidation}
        />
        <FormField
          label="詳細"
          name="description"
          placeholder="長いテキストが入る"
          component={TextArea}
          validate={descriptionValidation}
        />
        <FormField
          label="メールアドレス"
          name="email"
          placeholder="メールアドレス"
          component={TextInput}
          validate={emailValidation}
        />
        <Box align="center">
          <Button type="submit" primary label="Submit" />
        </Box>
        {initialValues.name}
      </GForm>
    </>
  );
};

export default DummyForm;
