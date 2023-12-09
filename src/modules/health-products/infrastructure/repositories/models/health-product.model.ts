import { EProductType } from '@module/health-products/domain/enums/product-type.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class HealthProduct extends Document {
  @Prop({ type: String, required: true })
  workerId: string;

  @Prop({ type: String, required: true })
  customerId: string;

  @Prop({ type: String, required: false, enum: EProductType })
  type: EProductType;

  @Prop({ type: String, required: true })
  base64: string;
}

const HealthProductSchema = SchemaFactory.createForClass(HealthProduct);

export { HealthProductSchema };
