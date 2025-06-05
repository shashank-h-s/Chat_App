import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
// Signup a new user
export const signup = async (req, res) => {
  const { fullName, email, password, profilePic, bio } = req.body;

  try {
    if (!fullName || !email || !password || !bio) {
      return res.json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      bio,
    });
    const token = generateToken(newUser._id)
    res.json({success:true, userData:newUser, token, message:"Account created successfully`"})
  } catch (err) {
    console.error("Error in signup:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
