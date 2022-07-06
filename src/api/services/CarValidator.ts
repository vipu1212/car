import { CarEntity } from '../models/CarEntity';
import { RegistrationValidator } from './RegistrationValidator';

export class CarValidator {
  static validate(car: CarEntity) {
    RegistrationValidator.validate(car.registration);
  }
}
