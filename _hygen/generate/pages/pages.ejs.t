---
to: src/pages/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

const <%= h.changeCase.pascalCase(name) %>: FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>This is <%= h.changeCase.pascalCase(name) %></title>
      </Helmet>
    </>
  );
};

export default <%= h.changeCase.pascalCase(name) %>;
