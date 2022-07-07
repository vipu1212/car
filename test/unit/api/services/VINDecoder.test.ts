import spyOn = jest.spyOn;
import axios from 'axios';
import {AXIOS_VALID_RESPONSE, AXIOS_ERROR_RESPONSE, AXIOS_INCOMPLETE_VIN_RESPONSE} from './fixtures/VINDecoderFixture';
import {VINDecoder} from '../../../../src/api/services/VINDecoder';
import {VIN} from '../../../../src/api/models/VIN';
import {IncompleteVINInfoError} from '../../../../src/api/models/errors/IncompleteVINInfoError';
import { NoEntityInputError } from '../../../../src/api/models/errors/NoEntityInputError';

describe('VINDecoder', function () {

  describe('getVinDetailsFromNumber', function () {
    it('should decode successfully', function () {
      spyOn(axios, 'get').mockResolvedValue(AXIOS_VALID_RESPONSE);

      const expectedVin = new VIN('123');
      expectedVin.model = '328i';
      expectedVin.year = 2014;
      expectedVin.make = 'BMW';

      expect(VINDecoder.getVinDetailsFromNumber('123')).resolves.toEqual(expectedVin);
    });

    it('should throw for empty vin', function () {
      expect(VINDecoder.getVinDetailsFromNumber('')).rejects.toThrow(NoEntityInputError);
    });

    it('should decode successfully', function () {
      spyOn(axios, 'get').mockResolvedValue(AXIOS_ERROR_RESPONSE);

      expect(VINDecoder.getVinDetailsFromNumber('123')).rejects.toThrow(Error);
    });

    it('should throw for incomplete vin info', function () {
      spyOn(axios, 'get').mockResolvedValue(AXIOS_INCOMPLETE_VIN_RESPONSE);

      expect(VINDecoder.getVinDetailsFromNumber('123')).rejects.toThrow(IncompleteVINInfoError);
    });
  });

});
