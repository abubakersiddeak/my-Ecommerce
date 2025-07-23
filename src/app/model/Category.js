import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    description: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String, // URL বা ফাইলপাথ
    },
    metaTitle: {
      type: String,
      trim: true,
    },
    metaDescription: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// স্বয়ংক্রিয় slug জেনারেট করার জন্য pre-save middleware
categorySchema.pre("validate", function (next) {
  if (!this.slug && this.name) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[\s\W-]+/g, "-") // স্পেস ও স্পেশাল ক্যারেক্টারগুলোকে হাইফেনে রূপান্তর
      .replace(/^-+|-+$/g, ""); // শুরুর ও শেষের অতিরিক্ত হাইফেন কেটে ফেলা
  }
  next();
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
