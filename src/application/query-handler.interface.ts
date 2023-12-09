import { IQuery } from '@application/index';

export interface IQueryHandler<T extends IQuery = any, TRes = any> {
  execute(query: T): Promise<TRes>;
}
