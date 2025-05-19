import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CategoryService } from "./category.service";

const addCategory = catchAsync(async(req: Request, res: Response) =>{
    const payload = req.body;
    const result = await CategoryService.addCategory(payload);
    res.send({
        statusCode: 201,
        success: true,
        message: "Category created successfully",
        data: result,
    });
});

const getAllCategory = catchAsync(async(req: Request, res: Response) =>{
    const result = await CategoryService.getAllCategory();
    res.send({
        statusCode: 200,
        success: true,
        message: "Category fetched successfully",
        data: result,
    })
})

export const CategoryController = {
    addCategory,
    getAllCategory,
}