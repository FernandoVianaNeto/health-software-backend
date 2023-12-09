import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateWorkerCommandHandler } from '../application/commands/create-worker.command-handler';
import { GetWorkersQueryHandler } from '../application/queries/get-workers.query-handler';
import { NestCreateWorkerCommandHandler } from './commands/nest-create-worker.command-handler';
import { CreateWorkerController } from './controllers/create-worker.controller';
import { GetWorkersController } from './controllers/get-workers.controller';
import { NestGetWorkersQueryHandler } from './queries/nest-get-workers.query-handler';
import {
  CreateWorkerServiceProvider,
  GetWorkersServiceProvider,
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
  controllers: [CreateWorkerController, GetWorkersController],
  providers: [
    NestCreateWorkerCommandHandler,
    CreateWorkerCommandHandler,
    MongoDBWorkerRepository,
    CreateWorkerServiceProvider,
    GetWorkersQueryHandler,
    NestGetWorkersQueryHandler,
    GetWorkersServiceProvider,
  ],
})
export class WorkersModule {}
