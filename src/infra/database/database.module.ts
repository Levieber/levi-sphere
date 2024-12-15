import { MikroOrmModule } from "@mikro-orm/nestjs";
import { MikroORM } from "@mikro-orm/postgresql";
import { Module, OnModuleInit } from "@nestjs/common";

@Module({
	imports: [MikroOrmModule.forRoot()],
})
export class DatabaseModule implements OnModuleInit {
	constructor(private readonly orm: MikroORM) {}

	onModuleInit() {
		this.orm.getMigrator().up();
	}
}
