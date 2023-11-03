import { OnApplicationShutdown } from '@nestjs/common';
import { connection } from 'mongoose';

export class MongoDBShutdownHook implements OnApplicationShutdown {
  async onApplicationShutdown() {
    await connection.close();
  }
}
