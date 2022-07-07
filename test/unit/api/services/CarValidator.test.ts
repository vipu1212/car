import {CarValidator} from '../../../../src/api/services/CarValidator';
import {EXPIRED_REG_CAR_REQUEST, VALID_CAR} from './fixtures/CarValidatorFixture';
import {NoEntityInput} from '../../../../src/api/models/errors/NoEntityInput';
import {RegistrationExpiredError} from '../../../../src/api/models/errors/RegistrationExpiredError';

describe('CarValidator', function () {

  describe('validate', function () {
    it('should validate successfully', function () {
      expect(() => CarValidator.validate(VALID_CAR as any)).not.toThrowError();
    });

    it('should throw for empty input', function () {
      expect(() => CarValidator.validate({} as any)).toThrowError(NoEntityInput);
    });

    it('should throw for invalid registration', function () {
      expect(() => CarValidator.validate(EXPIRED_REG_CAR_REQUEST as any)).toThrowError(RegistrationExpiredError);
    });
  });
});
