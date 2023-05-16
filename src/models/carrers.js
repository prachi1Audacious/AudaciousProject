import { Schema, model } from "mongoose";

const carrersSchema = new Schema({
  title: {
    type: Schema.Types.String,
  },
  headerImage: {
    type: Schema.Types.String,
  },
  qoute: {
    type: Schema.Types.String,
  },
  image: {
    type: Schema.Types.String,
  },
  opportunities: {
    title: {
      type: Schema.Types.String,
    },
    heading: [
      {
        headingTitle: {
          type: Schema.Types.String,
        },
        timining: {
          type: Schema.Types.String,
        },
        city: {
          type: Schema.Types.String,
        },
        status: {
          type: Schema.Types.String,
        },
        experince: {
          type: Schema.Types.String,
        },
        skills: {
          type: Schema.Types.Array,
        },
        roles: {
          roles_responsibility: {
            type: Schema.Types.String,
          },
        },
        buttonText: {
          type: Schema.Types.String,
        },
      },
    ],
  },
  exploreLife: {
    title: {
      type: Schema.Types.String,
    },
    image: {
      type: Schema.Types.Array,
    },
  },
  status: {
    type: Schema.Types.String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

module.exports = model("carrers", carrersSchema, "carrers");
