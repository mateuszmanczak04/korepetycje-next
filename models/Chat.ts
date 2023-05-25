import mongoose, { Model } from 'mongoose';

const ChatSchema = new mongoose.Schema<Chat>({
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const ChatModel: Model<Chat> =
  mongoose?.models?.Chat || mongoose.model<Chat>('Chat', ChatSchema);

export default ChatModel;
