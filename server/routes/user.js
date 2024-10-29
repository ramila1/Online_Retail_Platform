import express from "express";
import { userController } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/create-user", userController);

export default userRouter;
