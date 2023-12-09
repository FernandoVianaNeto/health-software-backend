import { CreateCustomerCommand } from '@module/customers/application/commands/create-customer.command';

export interface ICustomerRepository {
  createCustomer(customer: CreateCustomerCommand): Promise<void>;
}
