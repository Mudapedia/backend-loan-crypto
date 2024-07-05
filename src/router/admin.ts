import express from "express";
import AdminControl from "../controllers/admin";
import onlyLogin from "../middlewares/onlyLogin";

const adminRoute: express.Router = express.Router();

adminRoute.get(
  "/api/admin/transaction-finish",
  onlyLogin,
  AdminControl.getUsersTransactionFinish
);
adminRoute.get(
  "/api/admin/transaction-not-finish",
  onlyLogin,
  AdminControl.getUsersTransactionNotFinish
);
adminRoute.post("/api/admin/comment", onlyLogin, AdminControl.editComment);

export default adminRoute;
