import { ICategory } from "./category.interface";
import { CategoryModel } from "./category.model";

const addCategory = async(payload: ICategory) =>{
    const checkName = await CategoryModel.findOne({name: payload.name});
    if(checkName){
        throw new Error("Category already exists");
    }
    const result = await CategoryModel.create(payload);
    return result;
}

const getAllCategory = async()=>{
    const result = await CategoryModel.find();
    return result;
}

export const CategoryService = {
    addCategory,
    getAllCategory,
}