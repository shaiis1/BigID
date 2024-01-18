import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CreateArticleDto } from 'src/dto/create-article.dto';
import { ArticleService } from 'src/services/article.service';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  // Add other routes as necessary
}