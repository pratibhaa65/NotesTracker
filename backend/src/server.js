import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
connectDB();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use("/api/notes", notesRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});