import { Types } from "mongoose";

export interface IFood {
  name: string;
  category: Types.ObjectId;
  image: string;
}