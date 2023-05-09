import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
  hidden: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
