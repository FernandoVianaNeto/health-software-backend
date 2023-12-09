import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ICommand } from '@application/command.interface';
import { SetWorkerAvailableCommand } from '@module/workers/application/commands/set-worker-available.command';
import { SetWorkerAvailableRequest } from './requests/set-worker-availability.request';

@Controller('/worker')
@ApiTags('Workers')
@ApiBearerAuth()
export class SetWorkerAvailableController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({
    summary: 'Envia uma solicitação para bloqueamento do cartão físico.',
    description: 'Envia solicitação para bloquear cartão físico',
  })
  @ApiOkResponse({
    description: 'Retorno da chamada',
    status: 200,
  })
  @HttpCode(200)
  @Post('/set-availability')
  async list(@Body() body: SetWorkerAvailableRequest): Promise<void> {
    await this.commandBus.execute<ICommand, void>(
      new SetWorkerAvailableCommand(body.workerId, Boolean(body.available)),
    );
  }
}
