import { CreateCustomerCommand } from '@module/customers/application/commands/create-customer.command';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'name',
    required: true,
    description: 'customer name',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'email',
    required: true,
    description: 'customer email',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'birthDate',
    required: true,
    description: 'customer birthDate',
  })
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'phoneNumber',
    required: true,
    description: 'customer phoneNumber',
  })
  phoneNumber: string;

  public toDomain(): CreateCustomerCommand {
    return new CreateCustomerCommand(
      this.name,
      this.email,
      this.birthDate,
      this.phoneNumber,
    );
  }
}
