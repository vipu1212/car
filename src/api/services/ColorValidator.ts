import {ColorEntity} from '../models/ColorEntity';
import {NoEntityInputError} from '../models/errors/NoEntityInputError';

export class ColorValidator {
  public static validate(color: ColorEntity) {
    if (Object.keys(color).length === 0) {
      throw new NoEntityInputError();
    }
  }
}
