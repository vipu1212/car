import { CarEntity } from '../models/CarEntity';
import { RegistrationValidator } from './RegistrationValidator';
import {NoEntityInputError} from '../models/errors/NoEntityInputError';

export class CarValidator {
  static validate(car: CarEntity): void {
    if (Object.keys(car).length === 0) {
      throw new NoEntityInputError();
    }
    RegistrationValidator.validate(car.registration);
  }
}
