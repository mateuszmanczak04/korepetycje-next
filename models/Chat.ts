import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  lastMessageTimestamp: {
    type: Number,
  },
});

export default mongoose.models.Chat || mongoose.model('Chat', ChatSchema);
