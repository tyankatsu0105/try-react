import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Form as GForm,
  FormField,
  TextInput,
  TextArea,
  Button,
} from 'grommet';

const DummyForm: FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>This is DummyForm</title>
      </Helmet>

      <GForm>
        <FormField
          label="名前"
          name="name"
          placeholder="田中　太郎"
          component={TextInput}
          validate={{ regexp: /hoge/, message: 'hogeのみ受け付けます' }}
        />
        <FormField
          label="詳細"
          name="description"
          placeholder="長いテキストが入る"
          component={TextArea}
          validate={{ regexp: /fuga/, message: 'fugaのみ受け付けます' }}
        />
        <Box align="center">
          <Button type="submit" primary label="Submit" />
        </Box>
      </GForm>
    </>
  );
};

export default DummyForm;
