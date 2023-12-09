import { ICommandHandler } from '@application/command-handler.interface';
import { ICreateWorkerService } from '@module/workers/domain/services/create-worker-service.interface';
import { Worker } from '@module/workers/infrastructure/repositories/models/worker.model';
import { CreateWorkerCommand } from './create-worker.command';

export class CreateWorkerCommandHandler
  implements ICommandHandler<CreateWorkerCommand>
{
  constructor(protected readonly service: ICreateWorkerService) {}

  async execute(command: CreateWorkerCommand): Promise<Worker> {
    return this.service.createWorker(command);
  }
}
