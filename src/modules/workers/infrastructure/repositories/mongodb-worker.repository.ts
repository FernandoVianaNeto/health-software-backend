import { MongoBaseRepository } from '@infra/database/repository/mongo-base.repository';
import { CreateWorkerCommand } from '@module/workers/application/commands/create-worker.command';
import { IWorkerRepository } from '@module/workers/domain/repositories/worker-repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Worker } from './models/worker.model';

@Injectable()
export class MongoDBWorkerRepository
  extends MongoBaseRepository<Worker>
  implements IWorkerRepository
{
  constructor(
    @InjectModel(Worker.name)
    private readonly workerModel: Model<Worker>,
  ) {
    super(workerModel);
  }

  async createWorker(workerInfo: CreateWorkerCommand): Promise<Worker> {
    const { birthDate, email, name, phoneNumber, occupation } = workerInfo;

    return this.workerModel.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
      occupation: occupation,
    });
  }
}
