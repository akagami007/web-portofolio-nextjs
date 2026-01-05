import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:QgMhmQ3ENaB4Mdpz@database1.uuhr1yh.mongodb.net/"
      // "mongodb+srv://admin:<db_password>@database1.uuhr1yh.mongodb.net/?appName=database1"
    );
    console.log("Connected to MongoDB successfully");
  } catch (e) {
    console.error(e);
  }
}
