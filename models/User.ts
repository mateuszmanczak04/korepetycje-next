import mongoose, { Model } from 'mongoose';

const UserSchema = new mongoose.Schema<User>({
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
  imgUrl: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
});

const UserModel: Model<User> =
  mongoose?.models?.User || mongoose.model<User>('User', UserSchema);

export default UserModel;
