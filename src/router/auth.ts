import express from "express";
import Auth from "../controllers/auth";

const authRoute: express.Router = express.Router();

authRoute.post("/api/login", Auth.login);
authRoute.get("/api/islogin", Auth.isLogin);

export default authRoute;
