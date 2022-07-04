import { HttpError } from "routing-controllers";
import { HTTP_CODE } from "../../constants/constants";

export class RegistrationExpiredError extends HttpError {
  constructor(expirationDate: Date) {
    super(HTTP_CODE.ERR_UNPROCESSABLE, `Registration expired on ${expirationDate}`);
  }
}