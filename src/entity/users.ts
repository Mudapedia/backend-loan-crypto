import { ObjectId } from "mongoose";

export interface EntityUsers {
  _id: ObjectId;
  name: string;
  email: string;
  noHP: string;
  walletAddress: string;
  cryptoLoan: string;
  nominal: string;
  buktiHash: string;
  statusTransaksi: boolean;
  rejectComment: string;
  created_at: string;
}