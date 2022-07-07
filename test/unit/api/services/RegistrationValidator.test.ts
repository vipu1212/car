import {RegistrationValidator} from '../../../../src/api/services/RegistrationValidator';
import {INVALID_REGISTRATION, VALID_REGISTRATION} from './fixtures/RegistrationValidatorFixture';
import {RegistrationExpiredError} from '../../../../src/api/models/errors/RegistrationExpiredError';
import {NoEntityInput} from '../../../../src/api/models/errors/NoEntityInput';

describe('RegistrationValidator', function () {

  describe('validate', function () {
    it('should validate successfully', function () {
      expect(() => RegistrationValidator.validate(VALID_REGISTRATION as any)).not.toThrow();
    });

    it('should throw for expired registration', function () {
      expect(() => RegistrationValidator.validate({} as any)).toThrow(NoEntityInput);
    });

    it('should throw for expired registration', function () {
      expect(() => RegistrationValidator.validate(INVALID_REGISTRATION as any)).toThrow(RegistrationExpiredError);
    });
  });
});
