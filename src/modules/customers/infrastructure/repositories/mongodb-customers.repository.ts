import { MongoBaseRepository } from '@infra/database/repository/mongo-base.repository';
import { ICustomerRepository } from '@module/customers/domain/repositories/customer-repository-repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './models/customer.model';

@Injectable()
export class MongoDBCustomerRepository
  extends MongoBaseRepository<Customer>
  implements ICustomerRepository
{
  constructor(
    @InjectModel(Customer.name)
    private readonly emailSecurityCodeIncomeReport: Model<Customer>,
  ) {
    super(emailSecurityCodeIncomeReport);
  }

  async createCustomer(): Promise<void> {
    return;
  }
}
