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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const food_service_1 = require("./food.service");
const addFood = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield food_service_1.FoodService.addFood(payload);
    res.send({
        statusCode: 201,
        success: true,
        message: "Food created successfully",
        data: result,
    });
}));
const getAllFood = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.query;
    const result = yield food_service_1.FoodService.getAllFood(category);
    res.send({
        statusCode: 200,
        success: true,
        message: "Foods retrieved successfully",
        data: result,
    });
}));
exports.FoodController = {
    addFood,
    getAllFood,
};
