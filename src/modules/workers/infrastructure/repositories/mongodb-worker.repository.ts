import { MongoBaseRepository } from '@infra/database/repository/mongo-base.repository';
import { CreateWorkerCommand } from '@module/workers/application/commands/create-worker.command';
import { IWorkerRepository } from '@module/workers/domain/repositories/worker-repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Worker } from './models/worker.model';
import * as _ from 'lodash';
import { GetWorkerQuery } from '@module/workers/application/queries/get-worker.query';
import { SetWorkerAvailableCommand } from '@module/workers/application/commands/set-worker-available.command';

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
    const { birthDate, email, name, phoneNumber, occupation, tags } =
      workerInfo;

    return this.workerModel.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
      occupation: occupation,
      tags: tags,
    });
  }

  async getWorkers(filters: GetWorkerQuery): Promise<Worker[]> {
    const { name, occupation, available } = filters;

    const filter = {
      ...(!_.isUndefined(name) && { name: name }),
      ...(!_.isUndefined(occupation) && { occupation: occupation }),
      ...(!_.isUndefined(available) && { available: available }),
    };

    return this.workerModel.find(filter);
  }

  async updateAvailableStatus(
    command: SetWorkerAvailableCommand,
  ): Promise<Worker> {
    const { available, workerId } = command;

    return this.workerModel.findOneAndUpdate(
      { _id: workerId },
      { available: available },
    );
  }
}
