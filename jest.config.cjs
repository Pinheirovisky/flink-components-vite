module.exports = {
  roots: ["<rootDir>"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  modulePaths: ["<rootDir>/src/"],
  moduleDirectories: ["node_modules", "src"],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  verbose: true,
  testTimeout: 20000,
};
