// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    "node_modules"
  ],

  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   "js",
  //   "json",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "node"
  // ],
  moduleFileExtensions: ["js", "jsx"],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["jest-enzyme"],

  // The test environment that will be used for testing
  testEnvironment: "enzyme",

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: {
    "enzymeAdapter": "react16",
  },

  // A map from regular expressions to paths to transformers
  // transform: null,
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.jsx$": "babel-jest",
  },

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
