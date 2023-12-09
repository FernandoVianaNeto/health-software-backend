import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDBCustomerRepositoryProvider } from './repositories';
import { Customer, CustomerSchema } from './repositories/models/customer.model';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [MongoDBCustomerRepositoryProvider],
})
export class CustomersModule {}
