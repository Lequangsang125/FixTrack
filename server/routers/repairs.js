import express from "express";
import {
  getAllRepairs,
  createRepair,
  getRepair,
  updateRepair,
  deleteRepair
} from "../controllers/repairController.js";

const repairRoutes = express.Router();

repairRoutes.get("/", getAllRepairs);
repairRoutes.post("/", createRepair);
repairRoutes.get("/:id", getRepair);
repairRoutes.put("/:id", updateRepair);
repairRoutes.delete("/:id", deleteRepair);

export default repairRoutes;