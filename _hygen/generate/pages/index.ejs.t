---
to: src/pages/<%= h.changeCase.pascalCase(name) %>/index.ts
---
import { lazy } from 'react';

export const <%= h.changeCase.pascalCase(name) %> = lazy(() => import('./<%= h.changeCase.pascalCase(name) %>'));
