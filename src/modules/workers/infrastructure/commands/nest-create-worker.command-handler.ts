import { CreateWorkerCommand } from '@module/workers/application/commands/create-worker.command';
import { CreateWorkerCommandHandler } from '@module/workers/application/commands/create-worker.command-handler';
import { ICreateWorkerService } from '@module/workers/domain/services/create-worker-service.interface';
import { CreateWorkerServiceSymbol } from '@module/workers/workers.di-tokens';
import { Inject } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateWorkerCommand)
export class NestCreateWorkerCommandHandler extends CreateWorkerCommandHandler {
  public constructor(
    @Inject(CreateWorkerServiceSymbol)
    protected readonly service: ICreateWorkerService,
  ) {
    super(service);
  }
}
