import type { Config } from "jest";

const jestConfig: Config = {
	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: "src",
	testRegex: ".*\\.spec\\.ts$",
	transform: {
		".+\\.(t|j)s$": "ts-jest",
	},
	collectCoverageFrom: ["**/*.(t|j)s"],
	coverageDirectory: "../coverage",
	testEnvironment: "node",
};

export default jestConfig;
