import mongoose from 'mongoose';

const { Schema } = mongoose;
const UserSchema = new Schema({
  local: {
    name: String,
    email: String,
    password: String,
  },
  google: {
    email: String,
    id: String,
    displayName: String,
    token: String,
  },
  twitter: {
    username: String,
    id: String,
    token: String,
    displayName: String,
  },
  github: {
    email: String,
    id: String,
    displayName: String,
    token: String,
  },
});
export default mongoose.model('User', UserSchema);
