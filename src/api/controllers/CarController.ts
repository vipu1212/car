import { Body, Get, JsonController, Post, Param, Delete, Put, Res } from "routing-controllers";
import { Response } from 'express';

import { CarEntity } from "../models/CarEntity";
import { CarValidator } from "../services/CarValidator";
import { HTTP_CODE } from "../constants/constants";
import { RegistrationExpiredError } from "../models/errors/RegistrationExpiredError";
import { EntityNotFoundError } from "typeorm";
import { VINController } from "./VinController";

@JsonController('/cars')
export class CarController {
    @Get('/:id')
    async getOne(@Param('id') id: number, @Res() response: Response): Promise<CarEntity> {
        try {
            const car = await CarEntity.findOneOrFail(id);
            return car;
        } catch (error) {
            this.handleGetError(error, response);
        }
    }

    @Post()
    async postOne(@Body() car: CarEntity, @Res() response: Response): Promise<CarEntity> {
        try {
            CarValidator.validate(car);

            console.log(JSON.stringify(car, null, 2))

            car.vin = await VINController.saveFromVINId(car.vin.id);

            const createdCar = await CarEntity.save(car);

            response.status(HTTP_CODE.CREATED);
            return createdCar;
        } catch (error) {
            this.handlePostError(error, response);
        }
    }

    @Put('/:id')
    updateRegistration(@Param('id') id: number, @Body() car: CarEntity) {
        CarValidator.validate(car);
        CarEntity.update(id, car);
    }

    @Delete('/:id')
    async deleteOne(@Param('id') id: number, @Res() response: Response) {
        try {
           await CarEntity.delete(id);
        } catch (error) {
            this.handleDeleteError(error, response);
        }
    }

    private handleGetError(error: any, response: Response) {
        console.log(error)
        if (error instanceof EntityNotFoundError) {
            response.status(HTTP_CODE.ERR_NOT_FOUND).end();
        } else {
            response.status(HTTP_CODE.ERR_DEFAULT).end();
        }
    }

    private handlePostError(error: any, response: Response) {
        if (error instanceof RegistrationExpiredError) {
            response.status(HTTP_CODE.ERR_UNPROCESSABLE).end();
        } else {
            response.status(HTTP_CODE.ERR_DEFAULT).end();
        }
    }

    private handleDeleteError(error: any, response: Response) {
        if (error instanceof EntityNotFoundError) {
            response.status(HTTP_CODE.ERR_NOT_FOUND).end();
        } else {
            response.status(HTTP_CODE.ERR_DEFAULT).end();
        }
    }
}