import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI);
        console.log(`Connected to MongoDB: ${ENV.MONGO_URI}`);
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1);
    }
};