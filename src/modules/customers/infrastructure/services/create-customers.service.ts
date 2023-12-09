import { Injectable } from '@nestjs/common';
import { ICreateCustomerService } from '@module/customers/domain/services/create-customer-service.interface';
import { MongoDBCustomerRepository } from '../repositories/mongodb-customers.repository';
import { CreateCustomerCommand } from '@module/customers/application/commands/create-customer.command';

@Injectable()
export class CreateCustomerService implements ICreateCustomerService {
  public constructor(private readonly repository: MongoDBCustomerRepository) {}

  public async createCustomer(
    customerInfo: CreateCustomerCommand,
  ): Promise<void> {
    await this.repository.createCustomer(customerInfo);
  }
}
