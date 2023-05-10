import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

export default mongoose.models.Chat || mongoose.model('Chat', ChatSchema);
