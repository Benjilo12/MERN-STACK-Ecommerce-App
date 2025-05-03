import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    console.log("mango_url", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mangodb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connection to MongoDB", error.message);
    process.exit(1); //failure , 0 means success
  }
};
