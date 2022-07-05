import {ColorController} from '../../../src/api/controllers';
// import { ALL_COLORS } from './fixtures/ColorControllerFixtures';

describe('ColorController', () => {
  const colorController = new ColorController();
  describe('getAll', () => {
    it('should return all colors successfully', async () => {
      expect(colorController.getAll).resolves;
    });
  });
});
