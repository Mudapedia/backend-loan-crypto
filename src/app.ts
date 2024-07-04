import express from "express";
import cors from "cors";
import userRoute from "./router/user";
import errorHandling from "./middlewares/errorHandling";
import dotenv from "dotenv";
dotenv.config();

const app: express.Application = express();

app.use(cors({ origin: "https://frontend-loan-crypto.vercel.app" }));
app.use(express.json());

// routing

app.use(userRoute);
app.use(errorHandling);

export default app;
