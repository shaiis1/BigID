import { Controller, Post, Body } from '@nestjs/common';
import { FindWordDto } from 'src/dto/find-word.dto';
import { SearchWordsDto } from 'src/dto/search-words.dto';
import { ArticleService } from 'src/services/article.service';

@Controller('search')
export class SearchController {
  constructor(private articleService: ArticleService) {}

  @Post('find-words')
  findWords(@Body() searchWordsDto: SearchWordsDto): Promise<any[]> {
    return this.articleService.findWords(searchWordsDto);
  }

  @Post('find-most-common-word')
  findMostCommonWord(@Body() findWordDto: FindWordDto): Promise<{ articleId: string, count: number }> {
    return this.articleService.findMostCommonWord(findWordDto);
  }
}