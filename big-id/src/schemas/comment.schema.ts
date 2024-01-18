import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  content: String,
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});