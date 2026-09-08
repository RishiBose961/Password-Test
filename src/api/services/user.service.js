import { encrypt } from "../../utils/dataencryption.utlis.js";
import { hashPassword } from "../../utils/password.utils.js";
import User from "../models/user.model.js";
import { randomBytes } from "crypto";
import jwt from "jsonwebtoken";


export const registerUserService = async ({ name, email, password }) => {
  // Check if user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists with this email.");
  }

  const salt = randomBytes(16).toString("hex");
  const hashedPassword = await hashPassword(password, salt);

  // Create new user
  const user = new User({ name, email, password: hashedPassword, salt });
  const savedUser = await user.save();

  return savedUser;
};

export const loginUserService = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    return { message: "User no exists with this email." };
  }
  
  const hashedPassword = await hashPassword(password, user.salt);

  if (hashedPassword === user.password) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });
    return {
      _id: user._id,
      email: user.email,
      token,
      message: "User logged in successfully",
    };
  }
};

export const getUserProfileService = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password -salt");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return user;
};


export const createCardNumberService = async (userId, cardnumber) => {
 
  
  if (!cardnumber) {
    throw new Error("Card number is required");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  const encryptedCardNumber = encrypt(cardnumber);

  console.log("Encrypted Card Number:", encryptedCardNumber);
  
  user.cardnumber = encryptedCardNumber;
  await user.save();

  return user;
}