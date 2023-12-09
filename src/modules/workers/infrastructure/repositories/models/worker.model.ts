import { EOccupation } from '@module/workers/domain/enums/occupation.enum';
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

  @Prop({ type: String, required: true })
  phoneNumber: string;

  @Prop({ type: String, required: true, enum: EOccupation })
  occupation: string;
}

const WorkerSchema = SchemaFactory.createForClass(Worker);

export { WorkerSchema };
