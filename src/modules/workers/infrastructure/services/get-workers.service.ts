import { GetWorkerQuery } from '@module/workers/application/queries/get-worker.query';
import { IGetWorkersService } from '@module/workers/domain/services/get-workers-service.interface';
import { Injectable } from '@nestjs/common';
import { Worker } from '../repositories/models/worker.model';
import { MongoDBWorkerRepository } from '../repositories/mongodb-worker.repository';

@Injectable()
export class GetWorkersService implements IGetWorkersService {
  public constructor(private readonly repository: MongoDBWorkerRepository) {}

  public async getWorkers(filters: GetWorkerQuery): Promise<Worker[]> {
    return this.repository.getWorkers({
      ...filters,
      available: Boolean(filters.available),
    });
  }
}
