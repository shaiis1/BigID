import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentController } from 'src/controllers/comment.controller';
import { CommentSchema } from 'src/schemas/comment.schema';
import { CommentService } from 'src/services/comment.service';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }])
    ],
    controllers: [CommentController],
    providers: [CommentService],
  })
  export class CommentModule {}