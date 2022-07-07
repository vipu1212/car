import { CarEntity } from '../models/CarEntity';
import { RegistrationValidator } from './RegistrationValidator';
import {NoEntityInput} from '../models/errors/NoEntityInput';

export class CarValidator {
  static validate(car: CarEntity): void {
    if (Object.keys(car).length === 0) {
      throw new NoEntityInput();
    }
    RegistrationValidator.validate(car.registration);
  }
}
