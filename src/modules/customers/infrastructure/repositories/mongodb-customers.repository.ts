import { MongoBaseRepository } from '@infra/database/repository/mongo-base.repository';
import { CreateCustomerCommand } from '@module/customers/application/commands/create-customer.command';
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
    private readonly customerModel: Model<Customer>,
  ) {
    super(customerModel);
  }

  async createCustomer(
    createCustomerInfo: CreateCustomerCommand,
  ): Promise<Customer> {
    const { birthDate, email, name, phoneNumber } = createCustomerInfo;

    return this.customerModel.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
    });
  }
}
