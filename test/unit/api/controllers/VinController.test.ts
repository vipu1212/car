import spyOn = jest.spyOn;
import {VINDecoder} from '../../../../src/api/services/VINDecoder';
import {VALID_VIN} from './fixtures/VINControllerFixture';
import {VINController} from '../../../../src/api/controllers/VINController';
import {VINEntity} from '../../../../src/api/models/VINEntity';

describe('VinController', function () {
  describe('saveFromVINId', function () {

    const vin = new VINEntity('WBA3A5C57CF256651', 2021, 'BMW', '328i');

    it('should execute successfully', function () {
      spyOn(VINDecoder, 'getVinDetailsFromNumber').mockResolvedValue(VALID_VIN);
      spyOn(VINEntity, 'save').mockResolvedValue(vin);

      expect(VINController.saveFromVINId('WBA3A5C57CF256651')).resolves.toBe(vin);
    });
  });
});
