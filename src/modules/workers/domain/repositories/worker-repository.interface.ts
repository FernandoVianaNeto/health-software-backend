import { CreateWorkerCommand } from '@module/workers/application/commands/create-worker.command';
import { GetWorkerQuery } from '@module/workers/application/queries/get-worker.query';
import { Worker } from '@module/workers/infrastructure/repositories/models/worker.model';

export interface IWorkerRepository {
  createWorker(workerInfo: CreateWorkerCommand): Promise<Worker>;
  getWorkers(workerInfo: GetWorkerQuery): Promise<Worker[]>;
}
