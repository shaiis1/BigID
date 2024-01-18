import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleController } from 'src/controllers/article.controller';
import { SearchController } from 'src/controllers/search.controller';
import { ArticleSchema } from 'src/schemas/article.schema';
import { ArticleService } from 'src/services/article.service';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }])
    ],
    controllers: [ArticleController, SearchController],
    providers: [ArticleService],
  })
  export class ArticleModule {}