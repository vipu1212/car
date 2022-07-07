import {CarController} from '../../../../src/api/controllers';
import {CarEntity} from '../../../../src/api/models/CarEntity';
import {EXPIRED_REG_CAR_REQUEST, VALID_CAR, VALID_CAR_REQUEST} from './fixtures/CarControllerFixture';
import { response } from 'express';
import spyOn = jest.spyOn;
import {VINController} from '../../../../src/api/controllers/VINController';
import {VINEntity} from '../../../../src/api/models/VINEntity';
import {UpdateResult} from 'typeorm';
import {RegistrationEntity} from '../../../../src/api/models/RegistrationEntity';

describe('CarController', () => {

  beforeAll(() => {
    jest.resetAllMocks();
  });

  const carController = new CarController();

  describe('getOne', () => {
    it('should successfully return', async () => {
      spyOn(CarEntity, 'findOneOrFail').mockResolvedValue(VALID_CAR as any);

      expect(carController.getOne(1, response)).resolves.not.toThrow();
    });

    // it('should fail for non-persisted car id and be handled', async () => {
    //   spyOn(CarEntity, 'findOneOrFail').mockRejectedValue(new Error());
    //   carController.handleGetError = jest.fn();
    //
    //   expect(carController.getOne(100, response)).resolves.not.toThrow();
    //   expect(carController.handleGetError).toHaveBeenCalled();
    // });
  });

  describe('postOne',  () => {
    it('should return successfully after insert', async () => {
      spyOn(CarEntity, 'save').mockResolvedValue(VALID_CAR as CarEntity);
      spyOn(VINController, 'saveFromVINId').mockResolvedValue(VALID_CAR.vin as VINEntity);

      expect(carController.postOne(VALID_CAR_REQUEST as any, response)).resolves.not.toThrow();
    });

    it('should fail for invalid request and be handled', async () => {
      spyOn(CarEntity, 'save').mockResolvedValue(VALID_CAR as CarEntity);
      spyOn(VINController, 'saveFromVINId').mockResolvedValue(VALID_CAR.vin as VINEntity);
      carController.handlePostError = jest.fn();

      expect(carController.postOne(EXPIRED_REG_CAR_REQUEST as any, response)).resolves.not.toThrow();
      expect(carController.handlePostError).toHaveBeenCalled();
    });
  });

  describe('updateOne', function () {
    it('should successfully execute', function () {
      spyOn(RegistrationEntity, 'upsert').mockResolvedValue(null);
      spyOn(CarEntity, 'update').mockResolvedValue({affected: 1} as UpdateResult);
      spyOn(carController, 'getOne').mockResolvedValue(VALID_CAR as any);

      expect(carController.updateOne(1, VALID_CAR_REQUEST as any, response)).resolves.toBe(VALID_CAR);
    });

    // it('should fail for un-persisted car', function () {
    //   spyOn(RegistrationEntity, 'upsert').mockResolvedValue(null);
    //   spyOn(CarEntity, 'update').mockResolvedValue({affected: 0} as UpdateResult);
    //   carController.handleUpdateError = jest.fn();
    //
    //   expect(carController.updateOne(100, VALID_CAR_REQUEST as any, response)).resolves.not.toThrow();
    //   expect(carController.handleUpdateError).toHaveBeenCalled();
    // });

    it('should fail for expired registration car and be handled', function () {
      spyOn(RegistrationEntity, 'upsert').mockResolvedValue(null);
      carController.handleUpdateError = jest.fn();

      expect(carController.updateOne(1, EXPIRED_REG_CAR_REQUEST as any, response)).resolves.not.toThrow();
      expect(carController.handleUpdateError).toHaveBeenCalled();
    });
  });

  describe('deleteOne', function () {
    it('should execute successfully', function () {
      spyOn(CarEntity, 'delete').mockResolvedValue(null);

      expect(carController.deleteOne(1, response)).resolves.not.toThrow();
    });

    // it('should fail and be handled', function () {
    //   spyOn(CarEntity, 'delete').mockRejectedValue(new Error());
    //   carController.handleDeleteError = jest.fn();
    //
    //   expect(carController.deleteOne(1, response)).resolves.not.toThrow();
    //   expect(carController.handleDeleteError).toHaveBeenCalled();
    // });
  });
});
