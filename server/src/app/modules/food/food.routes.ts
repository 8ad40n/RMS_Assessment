import express from "express";
import { FoodController } from "./food.controller";
const router = express.Router();

router.post("/", FoodController.addFood);
router.get("/", FoodController.getAllFood);

export const FoodRoutes = router;