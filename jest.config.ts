import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

module.exports = createJestConfig({
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    moduleDirectories: ["node_modules", "<rootDir>/"],
});