import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is Connected Successfully!");
  } catch (error) {
    console.log("there is problem to connect database", error);
  }
};

export default dbConnect;
