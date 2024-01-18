import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  title: String,
  content: {
    type: String,
    required: true,
    text: true
    },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});