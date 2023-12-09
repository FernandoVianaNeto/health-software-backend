import { MongoDBCustomerRepositorySymbol } from '@module/customers/customers.di-tokens';
import { CreateWorkerServiceSymbol } from '@module/workers/workers.di-tokens';
import { Provider } from '@nestjs/common';
import { CreateWorkerService } from '../services/create-worker.service';
import { MongoDBWorkerRepository } from './mongodb-worker.repository';

export const MongoDBWorkerRepositoryProvider: Provider = {
  provide: MongoDBCustomerRepositorySymbol,
  useClass: MongoDBWorkerRepository,
};

export const CreateWorkerServiceProvider: Provider = {
  provide: CreateWorkerServiceSymbol,
  useClass: CreateWorkerService,
};
