import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import repairRoutes from "./routers/repairs.js";
import customerRoutes from "./routers/customers.js";
import inventoryRoutes from "./routers/inventory.js";
import accessoryRoutes from "./routers/accessories.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/repairs", repairRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/accessories", accessoryRoutes);


// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
