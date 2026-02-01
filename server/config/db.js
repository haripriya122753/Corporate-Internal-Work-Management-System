import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose
    .connect(process.env.MONGODB_URI, {
        dbName: "corporate_work_management_system"
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });
}