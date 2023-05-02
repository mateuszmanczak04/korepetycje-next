import mongoose from 'mongoose';

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
  imgUrl: {
    type: String,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
