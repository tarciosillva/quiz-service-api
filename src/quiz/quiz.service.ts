import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizScore } from './schemas/quizScore.schemas';
import { Model } from 'mongoose';

@Injectable()
export class QuizService {
  constructor(@InjectModel(QuizScore.name) private quizScoreModel: Model<QuizScore>) { }

  create(createQuizDto: CreateQuizDto) {
    const quizScore = new this.quizScoreModel(createQuizDto)
    return quizScore.save()
  }

  async findAll() {
    return await this.quizScoreModel.find()
  }
}
