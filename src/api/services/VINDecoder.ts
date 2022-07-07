import axios from 'axios';
import { VIN } from '../models/VIN';
import {VIN_DECODER_URL} from '../constants/constants';
import {IncompleteVINInfoError} from '../models/errors/IncompleteVINInfoError';
import {NoEntityInputError} from '../models/errors/NoEntityInputError';

export type VINResponse = {
  Results: VINResponseResult[]
}

type VINResponseResult = {
  Variable: string;
  Value: string;
}

export class VINDecoder {

  public static async getVinDetailsFromNumber(id: string): Promise<VIN> {

    if (!id) {
      throw new NoEntityInputError();
    }

    const vin: VIN = new VIN(id);

    const { status, statusText, data } = await axios.get( `${VIN_DECODER_URL}/api/vehicles/decodevin/${id}?format=json`);

    if (status !== 200) {
      throw new Error(statusText);
    }

    for (const result of (data as VINResponse).Results) {
      switch (result.Variable) {
      case 'Model Year':
        vin.year = Number(result.Value);
        break;
      case 'Make':
        vin.make = result.Value;
        break;
      case 'Model':
        vin.model = result.Value;
        break;
      }
    }

    if (vin.hasIncompleteInfo()) {
      throw new IncompleteVINInfoError(id);
    }

    return vin;
  }
}
