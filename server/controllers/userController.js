import userModel from "../models/userModel.js";

export const userController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    if (!name || !email || !password || !address || !phone) {
      return res.status(200).send({
        message: "All fields are required",
        success: false,
      });
    }
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(200).send({
        message: "User is already exist",
        success: false,
      });
    }
    const user = await userModel.create({
      name,
      email,
      password,
      address,
      phone,
    });
    if (!user) {
      return res.status(500).send({
        message: "User is not created",
        success: false,
      });
    }
    res.status(200).send({
      message: "User is created",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error while creating user",
      success: false,
      error,
    });
  }
};
