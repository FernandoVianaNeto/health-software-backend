import { CreateHealthProductCommand } from '@module/health-products/application/commands/create-health-product.command';
import { HealthProduct } from '@module/health-products/infrastructure/repositories/models/health-product.model';

export interface ICreateHealthProductsService {
  create(command: CreateHealthProductCommand): Promise<HealthProduct>;
}
