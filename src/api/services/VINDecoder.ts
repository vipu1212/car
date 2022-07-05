import axios from "axios";
import { VIN } from "../models/VIN";

type VINResponse = {
  Results: VINResponseResult[]
}

type VINResponseResult = {
  Variable: string;
  Value: string;
}

export class VINDecoder {

  public static async getVinDetailsFromNumber(id: string): Promise<VIN> {

    const vin: VIN = new VIN(id);

    console.log(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${id}?format=json`)

    try {
      const { data } = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${id}?format=json`);

      console.log(JSON.stringify(data, null, 2));

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
    } catch (error) {
      console.log(`------ ${error}`);
    }
    return vin;
  }
}