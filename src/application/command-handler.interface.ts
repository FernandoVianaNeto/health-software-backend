import { ICommand } from '@application/command.interface';

export interface ICommandHandler<Command extends ICommand, Response = unknown> {
  execute(command: Command): Promise<Response>;
}
