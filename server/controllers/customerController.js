import Customer from "../models/Customer.js";

export const getAllCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};

export const createCustomer = async (req, res) => {
  const newCustomer = new Customer(req.body);
  await newCustomer.save();
  res.status(201).json(newCustomer);
};

export const getCustomer = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.json(customer);
};

export const updateCustomer = async (req, res) => {
  const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteCustomer = async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.status(204).send();
};