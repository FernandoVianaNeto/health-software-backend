import { ICommand } from '@application/command.interface';

export class SetWorkerAvailableCommand extends ICommand {
  constructor(public workerId: string, public available: boolean) {
    super();
  }
}
