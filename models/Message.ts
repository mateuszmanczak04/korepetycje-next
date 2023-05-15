import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
  },
  timestamp: {
    type: Number,
    default: Date.now(),
  },
});

export default mongoose.models.Message ||
  mongoose.model('Message', MessageSchema);
