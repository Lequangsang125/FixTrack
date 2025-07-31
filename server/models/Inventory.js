import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  partName: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  priceIn: Number,
  priceOut: Number
});

export default mongoose.model("Inventory", inventorySchema);