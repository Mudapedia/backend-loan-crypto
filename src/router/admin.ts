import express from "express";
import AdminControl from "../controllers/admin";

const adminRoute: express.Router = express.Router();

adminRoute.post(
  "/api/admin/transaction-finish",
  AdminControl.getUsersTransactionFinish
);
adminRoute.put(
  "/api/admin/transaction-not-finish",
  AdminControl.getUsersTransactionNotFinish
);

export default adminRoute;
