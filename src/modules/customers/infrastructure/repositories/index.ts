import {
  CreateCustomerServiceSymbol,
  MongoDBCustomerRepositorySymbol,
} from '@module/customers/customers.di-tokens';
import { Provider } from '@nestjs/common';
import { CreateCustomerService } from '../services/create-customers.service';
import { MongoDBCustomerRepository } from './mongodb-customers.repository';

export const MongoDBCustomerRepositoryProvider: Provider = {
  provide: MongoDBCustomerRepositorySymbol,
  useClass: MongoDBCustomerRepository,
};

export const CreateCustomerServiceProvider: Provider = {
  provide: CreateCustomerServiceSymbol,
  useClass: CreateCustomerService,
};
