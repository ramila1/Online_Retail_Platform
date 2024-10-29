import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is rquired"],
    },
    email: {
      type: String,
      unique: [true, "Password should be unique"],
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("Users", userSchema);
export default userModel;
