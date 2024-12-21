import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import {
	FastifyAdapter,
	type NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { Logger } from "@nestjs/common";

const PORT = process.env.PORT ?? 3000;
const HOST = process.env.HOST ?? "0.0.0.0";
const BASE_URL = process.env.BASE_URL ?? `http://localhost:${PORT}`;

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	);

	app.enableShutdownHooks();

	const logger = new Logger("bootstrap");

	await app.listen(PORT, HOST, () => {
		logger.verbose(`Server is running at ${BASE_URL}`);
	});
}

bootstrap();
