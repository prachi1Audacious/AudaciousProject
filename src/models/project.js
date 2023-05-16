import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    headerImage: {
      type: Schema.Types.String,
    },
    projectDetails: {
      title: {
        type: Schema.Types.String,
      },
      BackroundImage: {
        type: Schema.Types.String,
      },
      heading: {
        type: Schema.Types.String,
      },
      quote: {
        type: Schema.Types.String,
      },
      discription: {
        type: Schema.Types.String,
      },
      icons: {
        type: Schema.Types.Array,
      },
      project: [
        {
          projectName: {
            type: Schema.Types.String,
          },
          projectDescription: {
            type: Schema.Types.String,
          },
          deployment: {
            title: {
              type: Schema.Types.String,
            },
            shortDescription: {
              type: Schema.Types.String,
            },
            description: {
              type: Schema.Types.String,
            },
          },
          technologies: {
            title: {
              type: Schema.Types.String,
            },
            language: {
              type: Schema.Types.Array,
            },
          },
          whyNeed: {
            title: {
              type: Schema.Types.String,
            },
            points: {
              type: Schema.Types.Array,
            },
          },
          url: {
            type: Schema.Types.String,
          },
          ourProject: {
            title: {
              type: Schema.Types.String,
            },
            images: {
              type: Schema.Types.Array,
            },
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

module.exports = model("project", projectSchema, "project");
