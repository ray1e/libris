import mongoose from "mongoose";
import ENV from "./env.js";

const { connection, connect } = mongoose;
const connectDB = async () => {
  try {
    await connect(ENV.MONGO_URI);
    console.log(`connected to MONGODB: ${connection.host}`);
    return connection;
  } catch (error) {
    console.error(`MONGODB connection error: ${error.message}`);
    throw error;
  }
};

export default connectDB;
