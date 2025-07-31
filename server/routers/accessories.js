import express from "express";
import {
  getAllAccessories,
  createAccessory,
  getAccessory,
  updateAccessory,
  deleteAccessory
} from "../controllers/accessoryController.js";

const accessoryRoutes = express.Router();

accessoryRoutes.get("/", getAllAccessories);
accessoryRoutes.post("/", createAccessory);
accessoryRoutes.get("/:id", getAccessory);
accessoryRoutes.put("/:id", updateAccessory);
accessoryRoutes.delete("/:id", deleteAccessory);

export default accessoryRoutes;