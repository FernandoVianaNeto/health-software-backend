import { CreateWorkerCommand } from '@module/workers/application/commands/create-worker.command';
import { Worker } from '@module/workers/infrastructure/repositories/models/worker.model';

export interface ICreateWorkerService {
  createWorker(workerInfo: CreateWorkerCommand): Promise<Worker>;
}
