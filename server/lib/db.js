import mongoose from "mongoose";

// Function to connect to the MongoDB database
export const connectDB = async () => {
  try {

    mongoose.connection.on('connected',()=> console.log('MongoDB connected successfully'));
    await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit the process with failure
  }
};
