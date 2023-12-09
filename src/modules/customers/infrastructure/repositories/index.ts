import { MongoDBCustomerRepositorySymbol } from '@module/customers/customers.di-tokens';
import { Provider } from '@nestjs/common';
import { MongoDBCustomerRepository } from './mongodb-customers.repository';

export const MongoDBCustomerRepositoryProvider: Provider = {
  provide: MongoDBCustomerRepositorySymbol,
  useClass: MongoDBCustomerRepository,
};
