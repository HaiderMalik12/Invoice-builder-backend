import mongoose from 'mongoose';

const { Schema } = mongoose;
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
export default mongoose.model('User', UserSchema);
