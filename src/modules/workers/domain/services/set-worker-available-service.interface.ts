import { SetWorkerAvailableCommand } from '@module/workers/application/commands/set-worker-available.command';
import { Worker } from '@module/workers/infrastructure/repositories/models/worker.model';

export interface ISetWorkerAvailableService {
  setAvailable(command: SetWorkerAvailableCommand): Promise<Worker>;
}
