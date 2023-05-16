const { Schema, model } = require("mongoose");

const homeSchema = new Schema({
  mainSection: {
    title: {
      type: Schema.Types.String,
    },
    backGroundImage: {
      type: Schema.Types.String,
    },
    buttonText: {
      type: Schema.Types.String,
    },
  },
  quote: {
    type: Schema.Types.String,
  },
  successBusiness: {
    successTitle: {
      type: Schema.Types.String,
    },
    successBlog: [
      {
        successBlogTitle: {
          type: Schema.Types.String,
        },
        successDescription: {
          type: Schema.Types.String,
        },
      },
    ],
  },
  ourservices: {
    title: {
      type: Schema.Types.String,
    },
    backGroundImage: {
      type: Schema.Types.String,
    },
    serviceBlog: [
      {
        serviceBlogTitle: {
          type: Schema.Types.String,
        },
        serviceDescription: {
          type: Schema.Types.String,
        },
        icons: {
          type: Schema.Types.String,
        },
        buttonText: {
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
          type: Schema.Types.String,
        },
        techName: {
          type: Schema.Types.String,
        },
        buttonText: {
          type: Schema.Types.String,
        },
      },
    ],
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

  joinUs: {
    joinImage: {
      type: Schema.Types.String,
    },
    joinUsTitle: {
      type: Schema.Types.String,
    },
    sections: [
      {
        joinSectionTitle: {
          type: Schema.Types.String,
        },
        joinSectionDescription: {
          type: Schema.Types.String,
        },
      },
    ],
  },
  FAQs: [
    {
      question: {
        type: Schema.Types.String,
      },
      answer: {
        type: Schema.Types.String,
      },
    },
  ],
  skill: {
    skillTitle: {
      type: Schema.Types.String,
    },
    skillDescription: {
      type: Schema.Types.String,
    },
    skillRate: [
      {
        skillRateTitle: {
          type: Schema.Types.String,
        },
        number: {
          type: Schema.Types.Number,
        },
      },
    ],
  },

  status: {
    type: Schema.Types.String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

module.exports = model("homeModel", homeSchema, "homeModel");
