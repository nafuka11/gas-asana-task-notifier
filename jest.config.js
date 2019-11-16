module.exports = {
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  globals: {
    "UrlFetchApp": {},
    "Logger": {},
    "Utilities": {}
  },
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
    "tsx",
  ],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  verbose: true,
};
