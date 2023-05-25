import mongoose, { Model } from 'mongoose';

const MessageSchema = new mongoose.Schema<Message>({
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

const MessageModel: Model<Message> =
  mongoose.models.Message || mongoose.model<Message>('Message', MessageSchema);

export default MessageModel;
