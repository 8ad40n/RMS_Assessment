import { CategoryModel } from "../category/category.model";
import { IFood } from "./food.interface";
import { FoodModel } from "./food.model";

const addFood = async (payload: IFood)=>{
    const checkName = await FoodModel.findOne({name: payload.name});
    if(checkName){
        throw new Error("Food already exists");
    }
    const result = (await FoodModel.create(payload));
    return result;
}

const getAllFood = async(categoryName?: string)=>{
    let filter: any = {};
    
    if (categoryName) {
        const category = await CategoryModel.findOne({ name: categoryName });
        if (category) {
            filter.category = category._id;
        } else {
            return [];
        }
    }
    
    const result = await FoodModel.find(filter).populate({
        path: 'category',
        select: 'name'
    });
    return result;
}

export const FoodService = {
    addFood,
    getAllFood,
}
