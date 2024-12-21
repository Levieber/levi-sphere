import { defineConfig } from "@mikro-orm/postgresql";
import { Migrator, TSMigrationGenerator } from "@mikro-orm/migrations";

export default defineConfig({
	clientUrl: process.env.DATABASE_URL,
	entities: ["dist/**/*.entity.js"],
	entitiesTs: ["src/**/*.entity.ts"],
	extensions: [Migrator],
	migrations: {
		tableName: "mikro_orm_migrations",
		path: "dist/infra/database/migrations",
		pathTs: "src/infra/database/migrations",
		generator: TSMigrationGenerator,
	},
	// @ts-expect-error nestjs adapter option
	registerRequestContext: false,
});
