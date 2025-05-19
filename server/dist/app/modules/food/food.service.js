"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodService = void 0;
const category_model_1 = require("../category/category.model");
const food_model_1 = require("./food.model");
const addFood = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const checkName = yield food_model_1.FoodModel.findOne({ name: payload.name });
    if (checkName) {
        throw new Error("Food already exists");
    }
    const result = (yield food_model_1.FoodModel.create(payload));
    return result;
});
const getAllFood = (categoryName) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = {};
    if (categoryName) {
        const category = yield category_model_1.CategoryModel.findOne({ name: categoryName });
        if (category) {
            filter.category = category._id;
        }
        else {
            return [];
        }
    }
    const result = yield food_model_1.FoodModel.find(filter).populate({
        path: 'category',
        select: 'name'
    });
    return result;
});
exports.FoodService = {
    addFood,
    getAllFood,
};
