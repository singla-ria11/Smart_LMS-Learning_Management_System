import mogoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mogoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    // handleError(error);
    console.error("Error while connecting to MongoDB:", error);
  }
};

export default connectDB;
