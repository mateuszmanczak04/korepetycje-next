import mongoose from 'mongoose';

const UserInChatSchema = new mongoose.Schema({
  chat: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
  },
  user: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.models.UserInChat ||
  mongoose.model('UserInChat', UserInChatSchema);
