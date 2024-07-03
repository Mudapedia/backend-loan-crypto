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
  walledAddres: {
    type: String,
    default: null,
  },
  buktiHash: {
    type: String,
    default: null,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UsersCol = mongoose.model("users", schemaUser, "users");
export default UsersCol;
