import mongoose from "mongoose";

export const connectDb = async (req, res) => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongoose is conncted to ${mongoose.connection.host}`);
  } catch (error) {
    res.status(500).send({
      message: "Cannnot connect to the databse",
      success: false,
      error,
    });
  }
};
export default connectDb;
