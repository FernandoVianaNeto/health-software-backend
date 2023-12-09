import { ApiProperty } from '@nestjs/swagger';
import { IsBooleanString, IsOptional, IsString } from 'class-validator';

export class GetWorkersRequest {
  @IsString()
  @IsOptional()
  @ApiProperty({
    name: 'name',
    required: false,
    description: 'Worker name',
  })
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    name: 'occupation',
    required: false,
    description: 'Worker occupation',
  })
  occupation?: string;

  @IsBooleanString()
  @IsOptional()
  @ApiProperty({
    name: 'available',
    required: false,
    description: 'Worker available',
  })
  available?: string;
}
