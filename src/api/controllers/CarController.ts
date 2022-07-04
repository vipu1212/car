import { Body, Get, JsonController, Post, Param, Delete, Put } from "routing-controllers";

import { CarEntity } from "../models/CarEntity";
import { CarValidator } from "../services/CarValidator";

@JsonController('/cars')
export class CarController {
    @Get('/:id')
    getOne(@Param('id') id: number): Promise<CarEntity> {
        return CarEntity.findOneOrFail(id);
    }

    @Post()
    postOne(@Body() car: CarEntity) {
        CarValidator.validate(car);
        return CarEntity.save(car);
    }

    @Put('/:id')
    updateRegistration(@Param('id') id: number, @Body() car: CarEntity) {
        // CarValidator.validate(car);
        // CarEntity.update(id, car);
    }

    @Delete('/:id')
    deleteOne(@Param('id') id: number) {
        return CarEntity.delete(id);
    }
}