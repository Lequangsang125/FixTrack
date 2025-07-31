import mongoose from "mongoose";

const repairSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  device: String,
  imei: String,
  fault: String,
  partsUsed: [String],
  status: { type: String, enum: ["Đang sửa", "Hoàn thành"], default: "Đang sửa" },
  price: Number,
  paid: Boolean,
  technician: String,
  dateReceived: Date,
  dateReturned: Date
});

export default mongoose.model("Repair", repairSchema);