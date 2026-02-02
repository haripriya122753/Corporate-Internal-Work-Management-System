import { connectDb } from "./config/db.js";
import app from "./app.js";

// DATABASE CONNECTION
connectDb();

// START SERVER
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})