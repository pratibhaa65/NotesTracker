import express from "express";
import cors from "cors"; 
import path from "path";
import dotenv from "dotenv"; 
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js"; 

dotenv.config(); 

const app = express();
connectDB(); 


app.use(cors({
    origin: "*",
    credentials: true
}));

app.use(express.json()); 

const PORT = process.env.PORT || 5001; 
const __dirname = path.resolve();

app.use("/api/notes",notesRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"../frontend/dist/index.html"));
    });
}

app.listen(PORT, ()=> {
    console.log(`Server is running on port : ${PORT}` );
});