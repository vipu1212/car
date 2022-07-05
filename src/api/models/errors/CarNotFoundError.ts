import { HttpError } from "routing-controllers";
import { HTTP_CODE } from "../../constants/constants";

export class CarNotFounddError extends HttpError {
  constructor(carId: string) {
    super(HTTP_CODE.ERR_NOT_FOUND, `Car with id ${carId} not found`);
  }
}