module.exports = {
  // Use the default CRA preset
  preset: "react-scripts",

  // Transform ESM modules (like axios)
  transformIgnorePatterns: ["node_modules/(?!axios)/"],

  // Ensure TypeScript files are processed correctly
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  // Setup files to run before each test
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  // Module name mapper for absolute imports (if you're using them)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
