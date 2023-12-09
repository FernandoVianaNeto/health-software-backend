import { CreateCustomerCommand } from '@module/customers/application/commands/create-customer.command';
import { Customer } from '@module/customers/infrastructure/repositories/models/customer.model';

export interface ICustomerRepository {
  createCustomer(customer: CreateCustomerCommand): Promise<Customer>;
}
