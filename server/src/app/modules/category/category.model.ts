import { model, Schema } from "mongoose";
import { ICategory } from "./category.interface";

const categorySchema = new Schema<ICategory>(
  {
    name: {
        type: String,
        required: [true, "Category name is required"],
        unique: true,
    }
  },
  {
    timestamps: true, 
  }
);

export const CategoryModel = model<ICategory>("Category", categorySchema);