import { EProductType } from '@module/health-products/domain/enums/product-type.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHealthProductRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'workerId',
    required: true,
    description: 'Worker id',
  })
  workerId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'customerId',
    required: true,
    description: 'customer id email',
  })
  customerId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'type',
    required: true,
    description: 'health product type',
    enum: EProductType,
  })
  type: EProductType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'base64',
    required: true,
    description: 'base 64',
  })
  base64: string;
}
