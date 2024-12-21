import { KnipConfig } from "knip";

const knipConfig: KnipConfig = {
	ignore: ["src/mikro-orm.config.ts"],
	ignoreDependencies: [
		"@commitlint/cli",
		"@mikro-orm/cli",
		"ajv", // ajv is installed to solve a mikro orm migrator cli error
		"lint-staged",
		"source-map-support",
		"ts-node",
		"ts-loader",
		"tsconfig-paths",
	],
};

export default knipConfig;
