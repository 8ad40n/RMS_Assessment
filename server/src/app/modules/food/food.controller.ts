import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { FoodService } from "./food.service";

const addFood = catchAsync(async(req: Request, res: Response) =>{
    const payload = req.body;
    const result = await FoodService.addFood(payload);
    res.send({
        statusCode: 201,
        success: true,
        message: "Food created successfully",
        data: result,
    });
});

const getAllFood = catchAsync(async(req: Request, res: Response) =>{
    const { category } = req.query;
    const result = await FoodService.getAllFood(category as string);
    res.send({
        statusCode: 200,
        success: true,
        message: "Foods retrieved successfully",
        data: result,
    });
});

export const FoodController = {
    addFood,
    getAllFood,
}