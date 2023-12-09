import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateCustomerCommandHandler } from '../application/commands/create-customer.command-handler';
import { NestCreateCustomerCommandHandler } from './commands/nest-create-customer.command-handler';
import { CreateCustomerController } from './controllers/create-customer.controller';
import {
  CreateCustomerServiceProvider,
  MongoDBCustomerRepositoryProvider,
} from './repositories';
import { Customer, CustomerSchema } from './repositories/models/customer.model';
import { MongoDBCustomerRepository } from './repositories/mongodb-customers.repository';

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
  controllers: [CreateCustomerController],
  providers: [
    MongoDBCustomerRepositoryProvider,
    CreateCustomerServiceProvider,
    MongoDBCustomerRepository,
    NestCreateCustomerCommandHandler,
    CreateCustomerCommandHandler,
  ],
})
export class CustomersModule {}
