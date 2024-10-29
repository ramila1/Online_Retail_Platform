import express from "express";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";
import connectDb from "./config/database.js";
import morgan from "morgan";
import cors from "cors";
dotenv.config();

connectDb();
const app = express();

const port = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`server is running at ${port} on ${process.env.NODE_ENV} mode`);
});
