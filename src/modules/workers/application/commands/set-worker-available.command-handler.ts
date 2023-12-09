import { ICommandHandler } from '@application/command-handler.interface';
import { ISetWorkerAvailableService } from '@module/workers/domain/services/set-worker-available-service.interface';
import { Worker } from '@module/workers/infrastructure/repositories/models/worker.model';
import { SetWorkerAvailableCommand } from './set-worker-available.command';

export class SetWorkerAvailableCommandHandler
  implements ICommandHandler<SetWorkerAvailableCommand>
{
  constructor(protected readonly service: ISetWorkerAvailableService) {}

  async execute(command: SetWorkerAvailableCommand): Promise<Worker> {
    return this.service.setAvailable(command);
  }
}
