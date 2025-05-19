"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const category_routes_1 = require("./app/modules/category/category.routes");
const food_routes_1 = require("./app/modules/food/food.routes");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/category", category_routes_1.CategoryRoutes);
app.use("/api/food", food_routes_1.FoodRoutes);
// Global Error Handler
app.use(globalErrorHandler_1.globalErrorHandler);
exports.default = app;
