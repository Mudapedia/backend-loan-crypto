import app from "./src/app";
import mongoose from "mongoose";

async function main() {
  try {
    if (!process.env.DB) {
      throw new Error("Invalid DB URL");
    }
    await mongoose.connect(
      "mongodb+srv://mudapedia:mudapedia123@cluster0.pqeaxuk.mongodb.net/loan-crypto?retryWrites=true&w=majority&appName=Cluster0"
    );

    app.listen(3000, function () {
      console.log("Server is running");
    });
  } catch (err) {
    console.log(err);
  }
}

main();
