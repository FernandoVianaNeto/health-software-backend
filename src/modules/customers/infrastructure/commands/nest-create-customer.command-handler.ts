import { CreateCustomerCommand } from '@module/customers/application/commands/create-customer.command';
import { CreateCustomerCommandHandler } from '@module/customers/application/commands/create-customer.command-handler';
import { CreateCustomerServiceSymbol } from '@module/customers/customers.di-tokens';
import { ICreateCustomerService } from '@module/customers/domain/services/create-customer-service.interface';
import { Inject } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateCustomerCommand)
export class NestCreateCustomerCommandHandler extends CreateCustomerCommandHandler {
  public constructor(
    @Inject(CreateCustomerServiceSymbol)
    protected readonly service: ICreateCustomerService,
  ) {
    super(service);
  }
}
