import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      default: null,
    },
    email: {
      type: Schema.Types.String,
      unique: true,
    },
    phone: {
      type: Schema.Types.String,
      default: null,
    },
    password: {
      type: Schema.Types.String,
    },
    isDeleted: {
      type: Schema.Types.Boolean,
      default: false,
    },
    isActive: {
      type: Schema.Types.Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default model("user", UserSchema);
