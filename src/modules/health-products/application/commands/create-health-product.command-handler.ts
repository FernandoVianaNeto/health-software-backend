import { ICommandHandler } from '@application/command-handler.interface';
import { IHealthProductRepository } from '@module/health-products/domain/repositories/health-product-repository.interface';
import { HealthProduct } from '@module/health-products/infrastructure/repositories/models/health-product.model';
import { CreateHealthProductCommand } from './create-health-product.command';

export class CreateHealthProductCommandHandler
  implements ICommandHandler<CreateHealthProductCommand>
{
  constructor(protected readonly repository: IHealthProductRepository) {}

  async execute(command: CreateHealthProductCommand): Promise<HealthProduct> {
    const response = await this.repository.createHealthProduct(command);

    return response;
  }
}
