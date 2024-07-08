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
adminRoute.put("/api/admin/comment/:id", onlyLogin, AdminControl.editComment);
adminRoute.put(
  "/api/admin/finished-transaction/:id",
  onlyLogin,
  AdminControl.finishedTransaction
);

export default adminRoute;
