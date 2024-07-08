import { ObjectId } from "mongoose";

export interface EntityUsers {
  _id: ObjectId;
  codeTransaksi: string;
  name: string;
  email: string;
  noHP: string;
  walletAddress: string;
  cryptoLoan: string;
  fee: string;
  loan: string;
  buktiHash: string;
  statusTransaksi: boolean;
  rejectComment: string;
  created_at: string;
}
