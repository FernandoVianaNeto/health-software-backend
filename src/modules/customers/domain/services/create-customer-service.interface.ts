import { CreateCustomerCommand } from '@module/customers/application/commands/create-customer.command';

export interface ICreateCustomerService {
  createCustomer(customerInfo: CreateCustomerCommand): Promise<void>;
}
