import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateHealthProductCommandHandler } from '../application/commands/create-health-product.command-handler';
import { NestCreateHealthProductCommandHandler } from './commands/nest-create-health-product.command-handler';
import { CreateHealthProductController } from './controllers/create-health-product.controller';
import { MongoDBHealthProductRepositoryProvider } from './repositories';
import {
  HealthProduct,
  HealthProductSchema,
} from './repositories/models/health-product.model';
import { MongoDBHealthProductRepository } from './repositories/mongodb-health-product.repository';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: HealthProduct.name,
        schema: HealthProductSchema,
      },
    ]),
  ],
  controllers: [CreateHealthProductController],
  providers: [
    NestCreateHealthProductCommandHandler,
    CreateHealthProductCommandHandler,
    MongoDBHealthProductRepository,
    MongoDBHealthProductRepositoryProvider,
  ],
})
export class HealthProductsModule {}
