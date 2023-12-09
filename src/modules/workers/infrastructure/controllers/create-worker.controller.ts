import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ICommand } from '@application/command.interface';
import { CreateWorkerCommand } from '@module/workers/application/commands/create-worker.command';
import { CreateWorkerRequest } from './requests/create-worker.request';

@Controller('/worker')
@ApiTags('Workers')
@ApiBearerAuth()
export class CreateWorkerController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({
    summary: 'Envia uma solicitação para bloqueamento do cartão físico.',
    description: 'Envia solicitação para bloquear cartão físico',
  })
  @ApiOkResponse({
    description: 'Retorno da chamada',
    status: 204,
  })
  @HttpCode(204)
  @Post('/create')
  async create(@Body() body: CreateWorkerRequest): Promise<void> {
    return this.commandBus.execute<ICommand, void>(
      new CreateWorkerCommand(
        body.name,
        body.email,
        body.birthDate,
        body.phoneNumber,
        body.occupation,
      ),
    );
  }
}
