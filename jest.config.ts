import type { Config } from "jest";

const config: Config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest"
    },

    transformIgnorePatterns: ["/node_modules/(?!(next-intl)/)"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^next-intl$": "<rootDir>/__mocks__/next-intl.ts"
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
};

export default config;
