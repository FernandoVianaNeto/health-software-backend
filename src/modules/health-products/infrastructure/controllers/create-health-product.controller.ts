import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ICommand } from '@application/command.interface';
import { CreateHealthProductRequest } from './requests/create-health-product.request';
import { CreateHealthProductCommand } from '@module/health-products/application/commands/create-health-product.command';
import { HealthProduct } from '../repositories/models/health-product.model';

@Controller('/health-products')
@ApiTags('Health-Products')
@ApiBearerAuth()
export class CreateHealthProductController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({
    summary: 'Envia uma solicitação para bloqueamento do cartão físico.',
    description: 'Envia solicitação para bloquear cartão físico',
  })
  @ApiOkResponse({
    description: 'Retorno da chamada',
    status: 204,
  })
  @HttpCode(200)
  @Post('/create')
  async create(
    @Body() body: CreateHealthProductRequest,
  ): Promise<HealthProduct> {
    const response = await this.commandBus.execute<ICommand, HealthProduct>(
      new CreateHealthProductCommand(
        body.workerId,
        body.customerId,
        body.type,
        body.base64,
      ),
    );

    return response;
  }
}
