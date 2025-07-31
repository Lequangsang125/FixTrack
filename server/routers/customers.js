import express from "express";
import {
  getAllCustomers,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer
} from "../controllers/customerController.js";

const customerRoutes = express.Router();

customerRoutes.get("/", getAllCustomers);
customerRoutes.post("/", createCustomer);
customerRoutes.get("/:id", getCustomer);
customerRoutes.put("/:id", updateCustomer);
customerRoutes.delete("/:id", deleteCustomer);

export default customerRoutes;