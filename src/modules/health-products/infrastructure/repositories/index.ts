import { MongoDBHealthProductRepositorySymbol } from '@module/health-products/health-products.di-tokens';
import { Provider } from '@nestjs/common';
import { MongoDBHealthProductRepository } from './mongodb-health-product.repository';

export const MongoDBHealthProductRepositoryProvider: Provider = {
  provide: MongoDBHealthProductRepositorySymbol,
  useClass: MongoDBHealthProductRepository,
};
