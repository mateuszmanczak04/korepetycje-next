import mongoose, { Model } from 'mongoose';

const ReviewSchema = new mongoose.Schema<Review>({
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

const ReviewModel: Model<Review> =
  mongoose?.models?.Review || mongoose.model<Review>('Review', ReviewSchema);

export default ReviewModel;
