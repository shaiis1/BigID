import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { Comment } from "src/interfaces/comment.interface";

@Injectable()
export class CommentService {
  constructor(@InjectModel('Comment') private commentModel: Model<Comment>) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const newComment = new this.commentModel(createCommentDto);
    return newComment.save();
  }

  async findAll(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }

  async findOne(id: string): Promise<Comment> {
    return this.commentModel.findById(id).exec();
  }

  // Add other necessary methods
}
