import { Body, Get, JsonController, Post } from "routing-controllers";
import { ColorEntity } from "../models/ColorEntity";

@JsonController('/colors')
export class ColorController {
    @Get()
    getAll(): Promise<ColorEntity[]>  {
        return ColorEntity.find();
    }

    @Post()
    postOne(@Body() color: ColorEntity): Promise<ColorEntity> {
        return ColorEntity.save(color);
    }
}