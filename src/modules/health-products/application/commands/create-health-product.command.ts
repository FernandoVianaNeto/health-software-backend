import { ICommand } from '@application/command.interface';
import { EProductType } from '@module/health-products/domain/enums/product-type.enum';

export class CreateHealthProductCommand extends ICommand {
  constructor(
    public workerId: string,
    public customerId: string,
    public type: EProductType,
    public base64: string,
  ) {
    super();
  }
}
