import { IQueryHandler } from '@application/index';
import { IGetWorkersService } from '@module/workers/domain/services/get-workers-service.interface';
import { Worker } from '@module/workers/infrastructure/repositories/models/worker.model';
import { GetWorkerQuery } from './get-worker.query';

export class GetWorkersQueryHandler implements IQueryHandler<GetWorkerQuery> {
  public constructor(protected readonly service: IGetWorkersService) {}

  public async execute(query: GetWorkerQuery): Promise<Worker[]> {
    return this.service.getWorkers(query);
  }
}
