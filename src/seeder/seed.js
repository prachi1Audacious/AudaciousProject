import mongoose from "mongoose";
import User from "../models/user";

const seedData = {
  username: "Admin",
  email: "superadmin@gmail.com",
  password: "admin@123",
  phone: "740340367",
};

//console.log(seedData);

const seedDB = async () => {
  try {
    await User.create(seedData);
    User.schema.path("email").index({ unique: true });
    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error inserting seed data");
  }
  mongoose.connection.close();
};

export default seedDB;
