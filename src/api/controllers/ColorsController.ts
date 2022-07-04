import { Body, Get, JsonController, Post, Param } from "routing-controllers";
import { ColorsEntity } from "../models/ColorsEntity";

@JsonController('/colors')
export class ColorController {
    @Get('/:id')
    getOne(@Param('id') id: number): Promise<ColorsEntity> {
        return ColorsEntity.findOneOrFail(id);
    }

    @Post('/')
    postOne(@Body() color: ColorsEntity) {
        return ColorsEntity.save(color);
    }
}