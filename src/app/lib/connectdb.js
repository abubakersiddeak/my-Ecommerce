import mongoose from "mongoose";
export default async function connectMongodb() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log(`Mongodb connection faield ${error}`);
  }
}
