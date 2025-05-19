import cors from 'cors';
import express, { Application } from 'express';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { CategoryRoutes } from './app/modules/category/category.routes';
import { FoodRoutes } from './app/modules/food/food.routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());


 app.use("/api/category", CategoryRoutes);
 app.use("/api/food",FoodRoutes);


// Global Error Handler
app.use(globalErrorHandler);

export default app;
