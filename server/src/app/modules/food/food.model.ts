import { model, Schema } from "mongoose";
import { IFood } from "./food.interface";

const foodSchema = new Schema<IFood>(
  {
    name: {
      type: String,
      required: [true, "Food title is required"],
      minlength: [3, "Title must be at least 3 characters long"],
      maxlength: [50, "Title cannot exceed 50 characters"],
      trim: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    image: {
      type: String,
      required: [true, "Product image URL is required"],
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
    }
  },
  {
    timestamps: true, 
  }
);

export const FoodModel = model<IFood>("Food", foodSchema);