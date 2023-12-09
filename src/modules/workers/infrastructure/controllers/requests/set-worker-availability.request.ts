import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class SetWorkerAvailableRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'workerId',
    required: true,
  })
  workerId: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    name: 'available',
    required: true,
  })
  available: boolean;
}
