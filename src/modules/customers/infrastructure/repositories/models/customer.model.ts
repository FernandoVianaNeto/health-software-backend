import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Customer extends Document {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  birthDate: string;

  @Prop({ type: String, required: true })
  phoneNumber: string;
}

const CustomerSchema = SchemaFactory.createForClass(Customer);

export { CustomerSchema };
