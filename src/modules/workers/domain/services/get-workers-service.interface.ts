import { GetWorkerQuery } from '@module/workers/application/queries/get-worker.query';
import { Worker } from '@module/workers/infrastructure/repositories/models/worker.model';

export interface IGetWorkersService {
  getWorkers(filters: GetWorkerQuery): Promise<Worker[]>;
}
