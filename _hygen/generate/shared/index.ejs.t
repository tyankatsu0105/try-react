---
to: src/shared/<%= dir %>/<%= h.changeCase.pascalCase(name) %>/index.ts
---
export * from './<%= h.changeCase.pascalCase(name) %>'
