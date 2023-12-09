import { CreateWorkerCommand } from '@module/workers/application/commands/create-worker.command';
import { Worker } from '@module/workers/infrastructure/repositories/models/worker.model';

export interface IWorkerRepository {
  createWorker(workerInfo: CreateWorkerCommand): Promise<Worker>;
}
