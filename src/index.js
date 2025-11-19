import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
const PORT = process.env.PORT;
dotenv.config({
 path: "./env",
});

connectDB()
 .then(() => {
  app.listen(PORT, () => {
   console.log(`server is running at https://localhost:${PORT}`);
  });

  app.on((err) => {
   console.log(`error: `, err);
   throw err;
  });
 })
 .catch((err) => {
  console.log("MONGO db connection failed !", err);
 });
