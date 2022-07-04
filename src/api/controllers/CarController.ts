import { Body, Get, JsonController, Post, Param } from "routing-controllers";

import { CarsEntity } from "../models/CarsEntity";

@JsonController('/cars')
export class CarController {
    @Get('/:id')
    getOne(@Param('id') id: number): Promise<CarsEntity> {
        return CarsEntity.findOneOrFail(id);
    }

    @Post()
    postOne(@Body() car: CarsEntity) {
            return CarsEntity.save(car);
    }
}