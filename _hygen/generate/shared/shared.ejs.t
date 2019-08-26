---
to: src/shared/<%= dir %>/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
import React, { FunctionComponent } from 'react';

export const <%= h.changeCase.pascalCase(name) %>: FunctionComponent = () => {
  return (
    <>
      
    </>
  );
};
