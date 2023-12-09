import { CreateWorkerCommand } from '@module/workers/application/commands/create-worker.command';
import { ICreateWorkerService } from '@module/workers/domain/services/create-worker-service.interface';
import { Injectable } from '@nestjs/common';
import { Worker } from '../repositories/models/worker.model';
import { MongoDBWorkerRepository } from '../repositories/mongodb-worker.repository';

@Injectable()
export class CreateWorkerService implements ICreateWorkerService {
  public constructor(private readonly repository: MongoDBWorkerRepository) {}

  public async createWorker(workerInfo: CreateWorkerCommand): Promise<Worker> {
    return this.repository.createWorker(workerInfo);
  }
}
