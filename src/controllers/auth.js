import User from "../models/user";
import logger from "../utils/logger";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";




/**
 * @typedef {object} signUp
 * @property {string} username - name
 * @property {string} email - email
 * @property {string} password - password
 */

/**
 * Post /v1/sign-up
 * @summary sign-up 
 * @tags auth
 * @param {signUp} request.body - signUp 
 * @return {object} 200 - Success response - application/json
 */

const signUp = async (req,res) =>{
  try{
    const{ name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
  console.log("kjhgfd")
    const userData = await User.create({
    name,
    email,
    password: hashedPassword,
   });

   await userData.save();

   return res.status(201).json({ Success: true,message: "User created successfully",userData: userData });
  } catch (error) {
   console.error(error);
   return res.status(500).json(error);
}
}

/**
 * @typedef {object} LoginBody
 * @property {string} email - email
 * @property {string} password - password
 */

/**
 * POST /v1/auth/login
 * @summary login user
 * @tags Auth
 * @param {LoginBody} request.body.required
 * @return {object} 200 - Success response - application/json
 */

const login = async (req, res) => {
  try {
    
    const { email, password } = req.body;
    const data = await User.findOne({ email,password });
    
    if (!data) {
      return res.status(400).json({ message: "email and password not match" });
    }
    const details = await User.findOneAndUpdate(
      {
        _id : data._id
      })
    
    const token = jwt.sign(
      {
        _id:details._id,
        email:details.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: 86400,
      }
    );
  
    return res
      .status(200)
      .json({ message: "login successfully",token:token });
  } catch (error) {
    logger.error(error);
    return res.json({ error: true, error, data: null });
  }
};

 
/**
 * @typedef {object} changePassword
 * @property {string} currentPassword - currentPassword
 * @property {string} newPassword - newPassword
 * @property {string} email - email
 */

/**
 * POST /v1/auth/changePassword
 * @summary password change
 * @tags Auth
 * @security BearerAuth
 * @param {changePassword} request.body.required
 * @return {object} 200 - Success response - application/json
 */

const changePassword = async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    
    const user = await User.findOne({ email });
    console.log(email)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (currentPassword!=user.password) {
      return res.status(400).json({ message: "Incorrect current password" });
    }
    
    // const salt = await bcrypt.genSalt(10);
    // const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    // user.password = hashedNewPassword;
    // await user.save();
    user.password = newPassword;
    await user.save()
    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ error: true, message: "Server error" });
  }
};



/**
 * @typedef {object} update
 * @property {string} username - firstName
 * @property {string} phone - phone
 */

/**
 * PUT /v1/auth/update
 * @summary Update profile
 * @tags Auth
 * @security BearerAuth
 * @param {update} request.body - update profile
 * @return {object} 200 - Success response - application/json
 */


const update = async (req, res) => {
  try {
    const { _id } = req.currentUser;
    const { username, phone } = req.body;
    const data = await User.findOneAndUpdate(
      {
        _id,
      },
      {
        $set: {
          _id,
          username,
          phone
        },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "updated successfully",
      data: data,
    });
  } catch (error) {
    return(res, error, { message: "server error" });
  }
};






export default {
  login,
  signUp,
  changePassword,
  update,
};


