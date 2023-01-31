module.exports = {
  setupFiles: ['dotenv/config'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
      '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/**/*.{ts}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/*.spec.ts'],
  clearMocks: true,
  bail: true,
};
