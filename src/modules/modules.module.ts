import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/infrastructure/customers.module';
import { HealthProductsModule } from './health-products/infrastructure/health-products.module';
import { WorkersModule } from './workers/infrastructure/workers.module';

@Module({
  imports: [CustomersModule, WorkersModule, HealthProductsModule],
  controllers: [],
  providers: [],
})
export class ModulesModule {}
