import { ColorController } from '../../../../src/api/controllers';
import {ColorEntity} from '../../../../src/api/models/ColorEntity';
import {ALL_COLORS} from './fixtures/ColorControllerFixtures';
import {response} from 'express';
import spyOn = jest.spyOn;

describe('ColorController', () => {

  beforeAll(() => {
    jest.resetAllMocks();
  });

  const colorController = new ColorController();

  describe('getAll', () => {
    it('should return all colors successfully', async () => {
      jest.spyOn(ColorEntity, 'find').mockResolvedValue((ALL_COLORS) as ColorEntity[]);
      expect(colorController.getAll()).resolves.toEqual(ALL_COLORS);
    });
  });

  describe('postOne', () => {
    it('should successfully execute', async () => {
      jest.spyOn(ColorEntity, 'save').mockResolvedValue(null);
      spyOn(response, 'end').mockReturnValue(null);

      expect(colorController.postOne(ALL_COLORS[0] as ColorEntity, response)).resolves.not.toThrow();
    });

    it('should throw error for empty input', async () => {
      jest.spyOn(ColorEntity, 'save').mockResolvedValue(ALL_COLORS[0] as ColorEntity);
      colorController.handlePostError = jest.fn();

      expect(colorController.postOne(null, response)).resolves.not.toThrow();
      expect(colorController.handlePostError).toHaveBeenCalledTimes(1);
    });
  });
});
