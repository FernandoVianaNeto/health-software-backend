import { Injectable } from '@nestjs/common';
import { ICreateCustomerService } from '@module/customers/domain/services/create-customer-service.interface';
import { MongoDBCustomerRepository } from '../repositories/mongodb-customers.repository';

@Injectable()
export class CreateCustomerService implements ICreateCustomerService {
  public constructor(private readonly repository: MongoDBCustomerRepository) {}

  public async createCustomer(): Promise<void> {
    return;
  }
}
