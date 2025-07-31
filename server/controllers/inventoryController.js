import Inventory from "../models/Inventory.js";

export const getAllInventory = async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
};

export const createInventory = async (req, res) => {
  const newItem = new Inventory(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

export const getInventory = async (req, res) => {
  const item = await Inventory.findById(req.params.id);
  res.json(item);
};

export const updateInventory = async (req, res) => {
  const updated = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteInventory = async (req, res) => {
  await Inventory.findByIdAndDelete(req.params.id);
  res.status(204).send();
};