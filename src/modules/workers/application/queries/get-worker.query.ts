import { IQuery } from '@application/query.interface';

export class GetWorkerQuery implements IQuery {
  constructor(
    public readonly name?: string,
    public readonly occupation?: string,
    public readonly available?: boolean,
  ) {}
}
