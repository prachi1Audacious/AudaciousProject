import { Schema, model } from "mongoose";

const serviceModel = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    backroundImage: {
      type: Schema.Types.String,
    },
    workingProcess: {
      title: {
        type: Schema.Types.String,
      },
      processImage: [
        {
          image: {
            type: Schema.Types.String,
          },
          imageTitle: {
            type: Schema.Types.String,
          },
          imagedescription: {
            type: Schema.Types.String,
          },
        },
      ],
    },
    services: {
      title: {
        type: Schema.Types.String,
      },
      serviceName: [
        {
          title: {
            type: Schema.Types.String,
          },
          description: {
            type: Schema.Types.String,
          },
          points: {
            type: Schema.Types.Array,
          },
          image: {
            type: Schema.Types.String,
          },
        },
      ],
    },
    technology: {
      techTitle: {
        type: Schema.Types.String,
      },
      image: [
        {
          techImage: {
            type: Schema.Types.Array,
          },
          techName: {
            type: Schema.Types.Array,
          },
          buttonText: {
            type: Schema.Types.String,
          },
        },
      ],
    },
    status: {
      type: Schema.Types.String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = model("Services", serviceModel, "Services");
