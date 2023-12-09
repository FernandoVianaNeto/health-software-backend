import { SetWorkerAvailableCommand } from '@module/workers/application/commands/set-worker-available.command';
import { ISetWorkerAvailableService } from '@module/workers/domain/services/set-worker-available-service.interface';
import { Injectable } from '@nestjs/common';
import { Worker } from '../repositories/models/worker.model';
import { MongoDBWorkerRepository } from '../repositories/mongodb-worker.repository';

@Injectable()
export class SetWorkerAvailableService implements ISetWorkerAvailableService {
  public constructor(private readonly repository: MongoDBWorkerRepository) {}

  public async setAvailable(
    command: SetWorkerAvailableCommand,
  ): Promise<Worker> {
    return this.repository.updateAvailableStatus(command);
  }
}
