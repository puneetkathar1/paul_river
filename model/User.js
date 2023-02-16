import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  projects: {
    type: Schema.Types.Mixed,
    default: {},
    required: true,
  },
  requestsLeft: {
    type: Number,
    default: 1,
    required: true,
  },
});


const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
