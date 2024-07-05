import express from "express";
import UsersControl from "../controllers/users";

const userRoute: express.Router = express.Router();

userRoute.post("/api/users", UsersControl.add);

export default userRoute;
