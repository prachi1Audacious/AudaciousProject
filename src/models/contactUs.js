import { Schema, model } from "mongoose";

const contactUsSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    headerImage: {
      type: Schema.Types.String,
    },
    founder: [
      {
        image: {
          type: Schema.Types.String,
        },
        name: {
          type: Schema.Types.String,
        },
        role: {
          type: Schema.Types.String,
        },
        description: {
          type: Schema.Types.String,
        },
        icons: {
          type: Schema.Types.String,
        },
      },
    ],
    status: {
      type: Schema.Types.String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = model("contactUS", contactUsSchema, "contactUs");
