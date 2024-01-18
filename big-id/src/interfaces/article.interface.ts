import { Document, Types } from 'mongoose';

export interface Article extends Document {
  title: string;
  content: string;
  authorId: Types.ObjectId; // Reference to a User document
}