import { EOccupation } from '@module/workers/domain/enums/occupation.enum';
import { EWorkerStatus } from '@module/workers/domain/enums/worker-status.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Worker extends Document {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  birthDate: string;

  @Prop({ type: String, required: false })
  phoneNumber: string;

  @Prop({ type: String, required: true, enum: EOccupation })
  occupation: string;

  @Prop({ type: String, required: false, enum: EWorkerStatus })
  status: EWorkerStatus;

  @Prop({ type: Boolean, required: false, default: false })
  available: boolean;

  @Prop({ type: String, required: true })
  tags: string;
}

const WorkerSchema = SchemaFactory.createForClass(Worker);

export { WorkerSchema };
