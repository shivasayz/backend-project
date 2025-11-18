import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
 try {
  const connectionInstance = await mongoose.connect(
   `${process.env.MONGODB_URI}/${DB_NAME}`
  );
  console.log(
   `\n MongoDB connected DB HOST: ${connectionInstance.connection.host}`
  );
 } catch (error) {
  console.log("DB Connection error: ", error);
  process.exit(1);
 }
};

export default connectDB;

// in index.js (root dir)
/*
import express from "express";
const app = express();
(async () => {
 try {
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  app.on("error", (err) => {
   console.log("err: ", err);
   throw err;
  });

  app.listen(process.env.PORT, () => {
   console.log(`app is listening at ${process.env.PORT}`);
  });
 } catch (error) {
  console.log("Error: ", error);
 }
})();
*/
