"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Category name is required"],
        unique: true,
    }
}, {
    timestamps: true,
});
exports.CategoryModel = (0, mongoose_1.model)("Category", categorySchema);
