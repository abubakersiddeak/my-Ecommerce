import mongoose from "mongoose";
const { Schema } = mongoose;

// Size Sub-Schema
const sizeSchema = new Schema(
  {
    size: { type: String, required: true },
    quantity: { type: Number, default: 0, min: 0 },
  },
  { _id: false }
);

// Review Sub-Schema
const reviewSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  username: { type: String, required: true, trim: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, trim: true },
  image: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

// Main Product Schema
const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: { type: String, trim: true },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    salePrice: { type: Number, required: true, min: 0 },
    buyPrice: { type: Number, min: 0 },

    brand: { type: String, trim: true },

    sizes: {
      type: [sizeSchema],
      default: [{ size: "Default Size", quantity: 0 }],
    },

    inStock: { type: Boolean, default: true },

    images: [{ type: String, required: true, trim: true }],

    sizeGuide: {
      image: { type: String },
      chest: { type: String, trim: true },
      length: { type: String, trim: true },
      waist: { type: String, trim: true },
      shoulder: { type: String, trim: true },
      sleeve: { type: String, trim: true },
    },

    adminNote: { type: String, trim: true },

    reviews: [reviewSchema],
  },
  { timestamps: true }
);

// Slug auto-generate from name
productSchema.pre("validate", function (next) {
  if (!this.slug && this.name) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[\s\W-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  next();
});

// Index on createdAt for sorting recent products
productSchema.index({ createdAt: -1 });

// Virtual: total quantity
productSchema.virtual("totalQuantity").get(function () {
  return this.sizes.reduce((acc, size) => acc + size.quantity, 0);
});

// Update inStock based on size quantity
productSchema.pre("save", function (next) {
  this.inStock = this.sizes.some((size) => size.quantity > 0);
  next();
});

// Model export
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
