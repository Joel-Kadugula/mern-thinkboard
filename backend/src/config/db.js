import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
  try {
    await mongoose.connect(config.MONGO_URI)

    console.log("Connected to database:" , mongoose.connection.name)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDB