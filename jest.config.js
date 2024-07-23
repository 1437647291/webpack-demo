module.exports = {
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  // testEnvironment: 'jsdom',
  coverageThreshold: {
    // global: {
    //   branches: 80,
    //   functions: 80,
    //   lines: 80,
    //   statements: -10,
    // },
  },
  moduleNameMapper: {
    '@@/(.*)$': '<rootDir>/$1'
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
};