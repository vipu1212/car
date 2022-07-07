import { RegistrationExpiredError } from '../models/errors/RegistrationExpiredError';
import { RegistrationEntity } from '../models/RegistrationEntity';
import {NoEntityInput} from '../models/errors/NoEntityInput';

export class RegistrationValidator {
  static validate(registration: RegistrationEntity) {
    if (Object.keys(registration).length === 0) {
      throw new NoEntityInput();
    }
    if (Number(new Date(registration.expiration)) <= Date.now()) {
      throw new RegistrationExpiredError(registration.expiration);
    }
  }
}
