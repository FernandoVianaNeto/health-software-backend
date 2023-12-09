import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/infrastructure/customers.module';
import { WorkersModule } from './workers/infrastructure/workers.module';

@Module({
  imports: [CustomersModule, WorkersModule],
  controllers: [],
  providers: [],
})
export class ModulesModule {}
