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
});

const UsersCol = mongoose.model("users", schemaUser, "users");
export default UsersCol;
