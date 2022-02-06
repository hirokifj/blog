/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: '<rootDir>/src/tests/setupEnv.ts',
  roots: ['<rootDir>/src'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
}
