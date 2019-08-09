/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN: string;
    readonly REACT_APP_REPOSITORY_ID: string;
  }
}
