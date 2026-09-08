import { decrypt } from "../../utils/dataencryption.utlis.js";
import {
    createCardNumberService,
  getUserProfileService,
  loginUserService,
  registerUserService,
} from "../services/user.service.js";

export const registerUser = async (req, res) => {
  try {
    const {name, email, password } = req.body;

    const user = await registerUserService({ name, email, password });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      message: "User registered successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginUserService({ email, password });

    res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error logging in", error: error.message });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await getUserProfileService(req);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: "Error retrieving user profile  ",
      error: error.message,
    });
  }
};


export const createCardNumber = async (req, res) => {
  try {
    const { cardnumber } = req.body;

    const userId = req.user.id;

    const updatedUser = await createCardNumberService(userId, cardnumber);

    res.status(200).json({
      message: "Card number added successfully",
      cardnumber: updatedUser.cardnumber
    });

  } catch (error) {
    res.status(500).json({
      message: "Error adding card number",
      error: error.message,
    });
  }
};
