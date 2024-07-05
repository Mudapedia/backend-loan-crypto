import { ObjectId } from "mongoose";

export interface EntityAdmin {
  _id: ObjectId;
  username: string;
  password: string;
}
