import { RegistrationExpiredError } from '../models/errors/RegistrationExpiredError';
import { RegistrationEntity } from '../models/RegistrationEntity';
import {NoEntityInputError} from '../models/errors/NoEntityInputError';

export class RegistrationValidator {
  static validate(registration: RegistrationEntity) {
    if (Object.keys(registration).length === 0) {
      throw new NoEntityInputError();
    }
    if (Number(new Date(registration.expiration)) <= Date.now()) {
      throw new RegistrationExpiredError(registration.expiration);
    }
  }
}
