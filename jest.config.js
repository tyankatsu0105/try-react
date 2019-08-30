module.exports = {
  roots: ['<rootDir>/src'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  setupFiles: ['<rootDir>/config/jest/globalSetup.js'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  transform: {
    '^.+\\.graphql$': 'jest-transform-graphql',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testURL: 'http://localhost',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
};
