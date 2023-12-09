import { CreateWorkerCommand } from '@module/workers/application/commands/create-worker.command';
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

  public toDomain(): CreateWorkerCommand {
    return new CreateWorkerCommand(
      this.name,
      this.email,
      this.birthDate,
      this.phoneNumber,
      this.occupation,
    );
  }
}
