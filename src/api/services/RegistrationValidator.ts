import { RegistrationEntity } from "../models/RegistrationEntity";

export class RegistrationValidator {
    static validate(registration: RegistrationEntity) {
        if (Number(new Date(registration.expiration)) <= Date.now()) {
            throw new Error(`Registration already expired on ${registration.expiration}`)
        }
    }
}