import User from "../models/user"
import mongoose from "mongoose";
import { verify as VerifyJWT } from "jsonwebtoken";

export const ValidateToken = async (req, res, next) => {
  const token = req.headers["authorization"]
    ? req.headers["authorization"].replace("Bearer ", "").trim()
    : "";
  if (!token) {
    return res.status(401).json({
      code: "NOT_AUTHORISED",
      message: "Unauthorized, Please provide authentication token!",
    });
  }
  try {
    const tokenData = VerifyJWT(token, process.env.JWT_SECRET);
    const currentUser = await User.findOne({
      _id: new mongoose.Types.ObjectId(tokenData._id),
    });
    console.log(currentUser)
    
    if (!currentUser) {
      return res.status(401).json({
        code: "NOT_AUTHORISED",
        message: "Unauthorized",
      });
    }
    req.currentUser = currentUser;
    next();
  } catch (error) {
    console.log("error", error);
    return res.status(401).json({
      code: "NOT_AUTHORISED",
      message: "Your login session has been expired, Please login again.",
    });
  }
};