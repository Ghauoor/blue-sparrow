import express from "express";
import cors from "cors";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();
app.use(cors());

app.listen(ENV.PORT, () => {
    console.log(`Server is running on port http://localhost:${ENV.PORT}`);
});