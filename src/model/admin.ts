import mongoose from "mongoose";

// test contribute fork
const schemaAdmin = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminCol = mongoose.model("admin", schemaAdmin, "admin");
export default AdminCol;
