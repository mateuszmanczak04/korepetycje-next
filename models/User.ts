import mongoose from 'mongoose';

export type UserType = {
  email?: string;
  username?: string;
  password?: string;
  _id?: string;
};

const UserSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    type: String,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
