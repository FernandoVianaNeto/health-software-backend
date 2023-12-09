import { CreateHealthProductCommand } from '@module/health-products/application/commands/create-health-product.command';
import { CreateHealthProductCommandHandler } from '@module/health-products/application/commands/create-health-product.command-handler';
import { IHealthProductRepository } from '@module/health-products/domain/repositories/health-product-repository.interface';
import { MongoDBHealthProductRepositorySymbol } from '@module/health-products/health-products.di-tokens';
import { Inject } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateHealthProductCommand)
export class NestCreateHealthProductCommandHandler extends CreateHealthProductCommandHandler {
  public constructor(
    @Inject(MongoDBHealthProductRepositorySymbol)
    protected readonly repository: IHealthProductRepository,
  ) {
    super(repository);
  }
}
