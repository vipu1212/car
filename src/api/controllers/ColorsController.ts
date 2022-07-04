import { Response } from "express";
import { Body, Get, JsonController, Post, Res } from "routing-controllers";
import { HTTP_CODE } from "../constants/constants";
import { ColorEntity } from "../models/ColorEntity";

@JsonController('/colors')
export class ColorController {
    @Get()
    getAll(): Promise<ColorEntity[]>  {
        return ColorEntity.find();
    }

    @Post()
    async postOne(@Body() color: ColorEntity, @Res() response: Response): Promise<ColorEntity> {
        try {
            const createdColor = await ColorEntity.save(color);
            response.status(HTTP_CODE.CREATED);
            return createdColor;
        } catch (error) {
            this.handlePostError(error, response);
        }
    }

    private handlePostError(error: any, response: Response) {
        response.status(HTTP_CODE.ERR_DEFAULT).end();
    }
}