"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodRoutes = void 0;
const express_1 = __importDefault(require("express"));
const food_controller_1 = require("./food.controller");
const router = express_1.default.Router();
router.post("/", food_controller_1.FoodController.addFood);
router.get("/", food_controller_1.FoodController.getAllFood);
exports.FoodRoutes = router;
