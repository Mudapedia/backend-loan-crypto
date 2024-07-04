import mongoose from "mongoose";

const schemaUser = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  noHP: {
    type: String,
    required: true,
  },
  walletAddressPendaftar: {
    type: String,
    default: null,
  },
  cryptoLoan: {
    type: String,
    default: null,
  },
  nominal: {
    type: String,
    default: null,
  },
  walletAddressTujuan: {
    type: String,
    default: null,
  },
  buktiHash: {
    type: String,
    default: null,
  },
  statusTransaksi: {
    type: String,
    default: "belum selesai",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UsersCol = mongoose.model("users", schemaUser, "users");
export default UsersCol;
