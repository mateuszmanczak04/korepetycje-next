import mongoose from 'mongoose';

export type ReviewType = {
  title: string;
  rating: number;
  author: { username: string; email: string };
  _id: string;
  createdAt: number;
};

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
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
