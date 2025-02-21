import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import itemRoutes from "./routes/item-routes";

dotenv.config();
connectDB();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/items", itemRoutes);

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
