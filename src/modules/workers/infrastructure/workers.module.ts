import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateWorkerCommandHandler } from '../application/commands/create-worker.command-handler';
import { SetWorkerAvailableCommandHandler } from '../application/commands/set-worker-available.command-handler';
import { GetWorkersQueryHandler } from '../application/queries/get-workers.query-handler';
import { NestCreateWorkerCommandHandler } from './commands/nest-create-worker.command-handler';
import { NestSetWorkerAvailableCommandHandler } from './commands/nest-set-worker-available.command-handler';
import { CreateWorkerController } from './controllers/create-worker.controller';
import { GetWorkersController } from './controllers/get-workers.controller';
import { SetWorkerAvailableController } from './controllers/set-worker-available.controller';
import { NestGetWorkersQueryHandler } from './queries/nest-get-workers.query-handler';
import {
  CreateWorkerServiceProvider,
  GetWorkersServiceProvider,
  SetWorkerAvailableServiceProvider,
} from './repositories';
import { Worker, WorkerSchema } from './repositories/models/worker.model';
import { MongoDBWorkerRepository } from './repositories/mongodb-worker.repository';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: Worker.name,
        schema: WorkerSchema,
      },
    ]),
  ],
  controllers: [
    CreateWorkerController,
    GetWorkersController,
    SetWorkerAvailableController,
  ],
  providers: [
    NestCreateWorkerCommandHandler,
    CreateWorkerCommandHandler,
    MongoDBWorkerRepository,
    CreateWorkerServiceProvider,
    GetWorkersQueryHandler,
    NestGetWorkersQueryHandler,
    GetWorkersServiceProvider,
    NestSetWorkerAvailableCommandHandler,
    SetWorkerAvailableCommandHandler,
    SetWorkerAvailableServiceProvider,
  ],
})
export class WorkersModule {}
