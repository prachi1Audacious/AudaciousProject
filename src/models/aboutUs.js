import { Schema, model } from "mongoose";

const aboutUsSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
    },
    headerImage: {
      type: Schema.Types.String,
    },
    inovation_technology: {
      image: {
        type: Schema.Types.String,
      },
      aboutUsTitle: {
        type: Schema.Types.String,
      },
      shortDescription: {
        type: Schema.Types.String,
      },
      description: {
        type: Schema.Types.String,
      },
      fields: [
        {
          fieldName: {
            type: Schema.Types.Array,
          },
          fieldCount: {
            type: Schema.Types.Number,
          },
        },
      ],
    },
    whyAudacious: {
      title: {
        type: Schema.Types.String,
      },
      image: {
        type: Schema.Types.String,
      },
      points: [
        {
          title: {
            type: Schema.Types.String,
          },
          description: {
            type: Schema.Types.String,
          },
        },
      ],
    },
    ourTeam: {
      name: {
        type: Schema.Types.String,
      },
      role: {
        type: Schema.Types.Array,
      },
      image: {
        type: Schema.Types.String,
      },
    },
    Experienced: {
      title: {
        type: Schema.Types.String,
      },
      description: {
        type: Schema.Types.String,
      },
      image: {
        type: Schema.Types.String,
      },
    },
    chooseUs: {
      chooseUsImage: {
        type: Schema.Types.String,
      },
      chooseUsTitle: {
        type: Schema.Types.String,
      },
      chooseShortDescription: {
        type: Schema.Types.String,
      },
      chooseDescription: {
        type: Schema.Types.String,
      },
      fields: {
        type: Schema.Types.Array,
      },
      buttonText: {
        type: Schema.Types.String,
      },
    },
    financialBusiness: {
      financeTitle: {
        type: Schema.Types.String,
      },
      description: {
        type: Schema.Types.String,
      },
      ourSection: [
        {
          ourSectionTitle: {
            type: Schema.Types.String,
          },
          financeImage: {
            type: Schema.Types.String,
          },
          ourSectionDescription: {
            type: Schema.Types.String,
          },
        },
      ],
    },
    teamWork: {
      title: {
        type: Schema.Types.String,
      },
      images: {
        type: Schema.Types.Array,
      },
    },
    status: {
      type: Schema.Types.String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = model("About Us", aboutUsSchema, "About Us");
