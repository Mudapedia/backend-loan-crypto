import app from "./src/app";
import mongoose from "mongoose";

async function main() {
  try {
    if (!process.env.DB) {
      throw new Error("Invalid DB URL");
    }
    await mongoose.connect(process.env.DB);

    app.listen(3000, function () {
      console.log("Server is running");
    });
  } catch (err) {
    console.log(err);
  }
}

main();
