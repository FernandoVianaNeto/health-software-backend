import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/infrastructure/customers.module';

@Module({
  imports: [CustomersModule],
  controllers: [],
  providers: [],
})
export class ModulesModule {}
