import { Document, Types } from 'mongoose';

export interface Comment extends Document {
  content: string;
  articleId: Types.ObjectId; // Reference to an Article document
  authorId: Types.ObjectId;  // Reference to a User document
}
