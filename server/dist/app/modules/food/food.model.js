"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModel = void 0;
const mongoose_1 = require("mongoose");
const foodSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Food title is required"],
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [50, "Title cannot exceed 50 characters"],
        trim: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Category is required"],
    },
    image: {
        type: String,
        required: [true, "Product image URL is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    }
}, {
    timestamps: true,
});
exports.FoodModel = (0, mongoose_1.model)("Food", foodSchema);
