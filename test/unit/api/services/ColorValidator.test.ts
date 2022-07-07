import {ColorValidator} from '../../../../src/api/services/ColorValidator';
import {VALID_COLOR} from './fixtures/ColorValidatorFixture';
import {NoEntityInputError} from '../../../../src/api/models/errors/NoEntityInputError';

describe('ColorValidator', function () {

  describe('validate', function () {
    it('should validate successfully', function () {
      expect(() => ColorValidator.validate(VALID_COLOR as any)).not.toThrow();
    });


    it('should throw for empty object', function () {
      expect(() => ColorValidator.validate({} as any)).toThrow(NoEntityInputError);
    });
  });
});
