import { CreateArticleDto } from "src/dto/create-article.dto";
import { Article } from "src/interfaces/article.interface";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { SearchWordsDto } from "src/dto/search-words.dto";
import { FindWordDto } from "src/dto/find-word.dto";

@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private articleModel: Model<Article>) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const newArticle = new this.articleModel(createArticleDto);
    return newArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async findOne(id: string): Promise<Article> {
    return this.articleModel.findById(id).exec();
  }

  async findWords(searchWordsDto: SearchWordsDto): Promise<any[]> {
    const searchQuery = searchWordsDto.words.join(" ")
    const articles = await this.articleModel.find({ $text: { $search: searchQuery}}).exec();
    let results = [];
  
    for (const word of searchWordsDto.words) {
      let wordResults = { [word]: [] };
  
      for (const article of articles) {
        let indexes = this.getWordOffsets(article.content, word);
        if (indexes.length > 0) {
          wordResults[word].push({ article_id: article.id, offsets: indexes });
        }
      }
  
      results.push(wordResults);
    }
  
    return results;
  }
  
  private getWordOffsets(content: string, word: string): number[] {
    let indexes = [];
    let pos = content.indexOf(word);
  
    while (pos !== -1) {
      indexes.push(pos);
      pos = content.indexOf(word, pos + 1);
    }
  
    return indexes;
  }

  async findMostCommonWord(findWordDto: FindWordDto): Promise<{ articleId: string, count: number }> {
    const articles = await this.articleModel.find({ $text: { $search: findWordDto.word } }).exec();
    let maxCount = 0;
    let articleIdWithMaxWord = null;
  
    for (const article of articles) {
      const wordCount = this.countWordOccurrences(article.content, findWordDto.word);
      if (wordCount > maxCount) {
        maxCount = wordCount;
        articleIdWithMaxWord = article.id;
      }
    }
  
    return { articleId: articleIdWithMaxWord, count: maxCount };
  }
  
  private countWordOccurrences(content: string, word: string): number {
    const words = content.split(/\s+/); // Split by whitespace
    return words.filter(w => w === word).length;
  }
  
}
