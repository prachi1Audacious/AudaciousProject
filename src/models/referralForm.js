import { Schema, model } from "mongoose";

const refferalFromSchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  reffredby: {
    type: Schema.Types.String,
  },
  email: {
    type: Schema.Types.String,
  },
  phone: {
    type: Schema.Types.String,
  },
  message: {
    type: Schema.Types.String,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

module.exports = model("refferals", refferalFromSchema, "refferals");
