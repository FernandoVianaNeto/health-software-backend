export interface ApplicationErrorInterface {
  code: string;
  message: string;
}

export abstract class ApplicationError extends Error {
  public readonly code: string;

  public readonly message: string;

  public constructor(error: ApplicationErrorInterface) {
    super(error.message);
    this.message = error.message;
    this.code = error.code;
  }

  public toPlain(): ApplicationErrorInterface {
    const { code, message } = this;

    return { code, message };
  }
}
