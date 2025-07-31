import Repair from "../models/Repair.js";

export const getAllRepairs = async (req, res) => {
  const repairs = await Repair.find().populate("customerId");
  res.json(repairs);
};

export const createRepair = async (req, res) => {
  const newRepair = new Repair(req.body);
  await newRepair.save();
  res.status(201).json(newRepair);
};

export const getRepair = async (req, res) => {
  const repair = await Repair.findById(req.params.id).populate("customerId");
  res.json(repair);
};

export const updateRepair = async (req, res) => {
  const updated = await Repair.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteRepair = async (req, res) => {
  await Repair.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
