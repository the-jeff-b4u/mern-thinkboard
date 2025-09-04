import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001

connectDB();

//middleware
app.use(express.json());

app.use("/api/notes", notesRoutes)

app.listen(PORT, () => {
    console.log("Server started on PORT:",PORT);
});

//mongodb+srv://jeffdhorick_db_user:GHJnpYbPhaJaB74L@cluster0.c1bhpo5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
