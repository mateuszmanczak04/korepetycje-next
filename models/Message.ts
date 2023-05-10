import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
  },
  time: {
    type: Number,
    default: Date.now(),
  },
});

export default mongoose.models.Message ||
  mongoose.model('Message', MessageSchema);
