import Accessory from "../models/Accessory.js";

export const getAllAccessories = async (req, res) => {
  const items = await Accessory.find();
  res.json(items);
};

export const createAccessory = async (req, res) => {
  const newItem = new Accessory(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

export const getAccessory = async (req, res) => {
  const item = await Accessory.findById(req.params.id);
  res.json(item);
};

export const updateAccessory = async (req, res) => {
  const updated = await Accessory.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteAccessory = async (req, res) => {
  await Accessory.findByIdAndDelete(req.params.id);
  res.status(204).send();
};