import { MongoBaseRepository } from '@infra/database/repository/mongo-base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HealthProduct } from './models/health-product.model';
import { IHealthProductRepository } from '@module/health-products/domain/repositories/health-product-repository.interface';
import { CreateHealthProductCommand } from '@module/health-products/application/commands/create-health-product.command';

@Injectable()
export class MongoDBHealthProductRepository
  extends MongoBaseRepository<HealthProduct>
  implements IHealthProductRepository
{
  constructor(
    @InjectModel(HealthProduct.name)
    private readonly healthProductModel: Model<HealthProduct>,
  ) {
    super(healthProductModel);
  }

  async createHealthProduct(
    healthProductInfo: CreateHealthProductCommand,
  ): Promise<HealthProduct> {
    const { base64, customerId, type, workerId } = healthProductInfo;

    return this.healthProductModel.create({
      base64: base64,
      customerId: customerId,
      type: type,
      workerId: workerId,
    });
  }
}
