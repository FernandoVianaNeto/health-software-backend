import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ICommand } from '@application/command.interface';
import { CreateCustomerRequest } from './requests/create-customer.request';
import { CreateCustomerCommand } from '@module/customers/application/commands/create-customer.command';

@Controller('/customer')
@ApiTags('cards')
@ApiBearerAuth()
export class CreateCustomerController {
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
  async create(@Body() body: CreateCustomerRequest): Promise<void> {
    console.log('body', body);

    return this.commandBus.execute<ICommand, void>(
      new CreateCustomerCommand(
        body.name,
        body.email,
        body.birthDate,
        body.phoneNumber,
      ),
    );
  }
}
