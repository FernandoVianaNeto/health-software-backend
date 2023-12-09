import { SetWorkerAvailableCommand } from '@module/workers/application/commands/set-worker-available.command';
import { SetWorkerAvailableCommandHandler } from '@module/workers/application/commands/set-worker-available.command-handler';
import { ISetWorkerAvailableService } from '@module/workers/domain/services/set-worker-available-service.interface';
import { SetWorkerAvailableServiceSymbol } from '@module/workers/workers.di-tokens';
import { Inject } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';

@CommandHandler(SetWorkerAvailableCommand)
export class NestSetWorkerAvailableCommandHandler extends SetWorkerAvailableCommandHandler {
  public constructor(
    @Inject(SetWorkerAvailableServiceSymbol)
    protected readonly service: ISetWorkerAvailableService,
  ) {
    super(service);
  }
}
