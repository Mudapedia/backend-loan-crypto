import { ObjectId } from "mongoose";

export interface EntityUsers {
  _id: ObjectId;
  username: string;
  email: string;
  noHP: string;
  walletAddressPendaftar: string;
  cryptoLoan: string;
  nominal: string;
  walletAddressTujuan: string;
  buktiHash: string;
  statusTransaksi: string;
  created_at: string;
}
