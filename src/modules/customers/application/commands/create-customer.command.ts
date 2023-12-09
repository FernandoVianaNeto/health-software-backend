import { ICommand } from '@application/command.interface';

export class CreateCustomerCommand extends ICommand {
  constructor(
    public name: string,
    public email: string,
    public birthDate: string,
    public phoneNumber: string,
  ) {
    super();
  }
}
