import { Inject } from '@nestjs/common';
import { QueryHandler } from '@nestjs/cqrs';
import { GetWorkerQuery } from '@module/workers/application/queries/get-worker.query';
import { GetWorkersQueryHandler } from '@module/workers/application/queries/get-workers.query-handler';
import { GetWorkersServiceSymbol } from '@module/workers/workers.di-tokens';
import { IGetWorkersService } from '@module/workers/domain/services/get-workers-service.interface';

@QueryHandler(GetWorkerQuery)
export class NestGetWorkersQueryHandler extends GetWorkersQueryHandler {
  public constructor(
    @Inject(GetWorkersServiceSymbol)
    protected readonly service: IGetWorkersService,
  ) {
    super(service);
  }
}
