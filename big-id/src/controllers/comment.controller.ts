import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { CommentService } from 'src/services/comment.service';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(id);
  }

  // Add other routes as necessary
}