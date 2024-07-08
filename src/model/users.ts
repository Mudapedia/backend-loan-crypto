import mongoose from "mongoose";

const schemaUser = new mongoose.Schema({
  codeTransaksi: {
    type: String,
  },
  name: {
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
  walletAddress: {
    type: String,
    required: true,
  },
  cryptoLoan: {
    type: String,
    default: "",
  },
  fee: {
    type: String,
    required: true,
  },
  loan: {
    type: String,
    required: true,
  },
  buktiHash: {
    type: String,
    default: "",
  },
  statusTransaksi: {
    type: Boolean,
    default: false,
  },
  rejectComment: {
    type: String,
    default: "",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UsersCol = mongoose.model("users", schemaUser, "users");
export default UsersCol;
