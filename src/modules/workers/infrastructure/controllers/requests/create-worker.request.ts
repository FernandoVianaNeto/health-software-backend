import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkerRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'name',
    required: true,
    description: 'Worker name',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'email',
    required: true,
    description: 'Worker email',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'birthDate',
    required: true,
    description: 'Worker birthDate',
  })
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'phoneNumber',
    required: true,
    description: 'Worker phoneNumber',
  })
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'occupation',
    required: true,
    description: 'Worker occupation',
  })
  occupation: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'tags',
    required: true,
    description: 'Worker tags',
  })
  tags: string;
}
