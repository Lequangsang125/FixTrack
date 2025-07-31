import express from "express";
import {
  getAllInventory,
  createInventory,
  getInventory,
  updateInventory,
  deleteInventory
} from "../controllers/inventoryController.js";

const inventoryRoutes = express.Router();

inventoryRoutes.get("/", getAllInventory);
inventoryRoutes.post("/", createInventory);
inventoryRoutes.get("/:id", getInventory);
inventoryRoutes.put("/:id", updateInventory);
inventoryRoutes.delete("/:id", deleteInventory);

export default inventoryRoutes;
