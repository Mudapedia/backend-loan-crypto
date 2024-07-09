import express from "express";
import cors from "cors";
import userRoute from "./router/user";
import errorHandling from "./middlewares/errorHandling";
import dotenv from "dotenv";
import authRoute from "./router/auth";
import cookieParser from "cookie-parser";
import adminRoute from "./router/admin";
dotenv.config();

const app: express.Application = express();

app.use(
  cors({
    origin: [
      "https://cryptoglobalswift.com",
      "https://frontend-loan-crypto.vercel.app",
      // "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(cookieParser("secret"));
app.use(express.json());

// routing

app.use(userRoute);
app.use(authRoute);
app.use(adminRoute);
app.use(errorHandling);

export default app;
