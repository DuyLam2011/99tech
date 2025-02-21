import { Request, Response } from "express";
import Item from "../models/item";

export const getItems = async (req: Request, res: Response) => {
	const items = await Item.find();
	res.json(items);
};

export const getItemById = async (req: Request, res: Response) => {
	const item = await Item.findById(req.params.id);
	item ? res.json(item) : res.status(404).json({ message: "Item not found" });
};

export const createItem = async (req: Request, res: Response) => {
	const { name, description } = req.body;
	const newItem = new Item({ name, description });
	await newItem.save();
	res.json(newItem);
};

export const updateItem = async (req: Request, res: Response) => {
	const { name, description } = req.body;
	const updatedItem = await Item.findByIdAndUpdate(
		req.params.id,
		{ name, description },
		{ new: true }
	);
	updatedItem
		? res.json(updatedItem)
		: res.status(404).json({ message: "Item not found" });
};

export const deleteItem = async (req: Request, res: Response) => {
	const deletedItem = await Item.findByIdAndDelete(req.params.id);
	deletedItem
		? res.json({ message: "Item deleted" })
		: res.status(404).json({ message: "Item not found" });
};
