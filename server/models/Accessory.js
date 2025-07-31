import mongoose from "mongoose";

const accessorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  priceIn: Number,
  priceOut: Number,
  category: { type: String }, // VD: ốp, sạc, tai nghe...
  description: String,
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Accessory", accessorySchema);