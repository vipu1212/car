import {ColorEntity} from '../models/ColorEntity';
import {NoEntityInput} from '../models/errors/NoEntityInput';

export class ColorValidator {
  public static validate(color: ColorEntity) {
    if (Object.keys(color).length === 0) {
      throw new NoEntityInput();
    }
  }
}
