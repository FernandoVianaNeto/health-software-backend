// import { CreateHealthProductCommand } from '@module/health-products/application/commands/create-health-product.command';
// import { ICreateHealthProductsService } from '@module/health-products/domain/services/create-health-products-service';
// import { Injectable } from '@nestjs/common';
// import { HealthProduct } from '../repositories/models/health-product.model';
// import { MongoDBHealthProductRepository } from '../repositories/mongodb-health-product.repository';

// @Injectable()
// export class CreateHealthProductService
//   implements ICreateHealthProductsService
// {
//   public constructor(
//     private readonly repository: MongoDBHealthProductRepository,
//   ) {}

//   public async create(
//     command: CreateHealthProductCommand,
//   ): Promise<HealthProduct> {
//     const { base64, customerId, type, workerId } = command;

//     return this.repository.updateAvailableStatus(command);
//   }
// }
