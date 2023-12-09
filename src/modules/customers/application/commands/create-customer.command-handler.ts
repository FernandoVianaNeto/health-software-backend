import { ICommandHandler } from '@application/command-handler.interface';
import { ICreateCustomerService } from '@module/customers/domain/services/create-customer-service.interface';
import { CreateCustomerCommand } from './create-customer.command';

export class CreateCustomerCommandHandler
  implements ICommandHandler<CreateCustomerCommand>
{
  constructor(protected readonly service: ICreateCustomerService) {}

  async execute(command: CreateCustomerCommand): Promise<void> {
    return this.service.createCustomer(command);
  }
}
