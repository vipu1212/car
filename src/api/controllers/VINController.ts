import { VINEntity } from '../models/VINEntity';
import { VINDecoder } from '../services/VINDecoder';

export class VINController {

  public static async saveFromVINId(id: string) {
    const { make, model, year } = await VINDecoder.getVinDetailsFromNumber(id);
    return VINEntity.save(new VINEntity(id, year, make, model));
  }
}