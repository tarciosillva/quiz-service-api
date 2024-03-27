import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { QuizScore, QuizScoreSchema } from './schemas/quizScore.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: QuizScore.name, schema: QuizScoreSchema }])],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule { }
