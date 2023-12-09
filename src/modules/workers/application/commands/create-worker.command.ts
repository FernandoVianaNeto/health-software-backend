import { ICommand } from '@application/command.interface';

export class CreateWorkerCommand extends ICommand {
  constructor(
    public name: string,
    public email: string,
    public birthDate: string,
    public phoneNumber: string,
    public occupation: string,
    public tags: string,
  ) {
    super();
  }
}
