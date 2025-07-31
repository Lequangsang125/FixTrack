import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  notes: { type: String }
});

export default mongoose.model("Customer", customerSchema);