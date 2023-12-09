import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { GetWorkersRequest } from './requests/get-workers.request';
import { GetWorkerQuery } from '@module/workers/application/queries/get-worker.query';
import { IQuery } from '@application/query.interface';

@Controller('/worker')
@ApiTags('Workers')
@ApiBearerAuth()
export class GetWorkersController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiOperation({
    summary: 'Envia uma solicitação para bloqueamento do cartão físico.',
    description: 'Envia solicitação para bloquear cartão físico',
  })
  @ApiOkResponse({
    description: 'Retorno da chamada',
    status: 200,
  })
  @HttpCode(200)
  @Get('/list')
  async list(@Query() query: GetWorkersRequest): Promise<Worker[]> {
    return this.queryBus.execute<IQuery, Worker[]>(
      new GetWorkerQuery(
        query.name,
        query.occupation,
        Boolean(query.available),
      ),
    );
  }
}
