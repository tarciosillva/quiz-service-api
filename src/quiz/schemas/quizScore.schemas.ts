
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuizScoreDocument = HydratedDocument<QuizScore>;

@Schema()
export class QuizScore {
    @Prop({ required: true })
    quizTitle: string;

    @Prop({ required: true })
    score: String;
}

export const QuizScoreSchema = SchemaFactory.createForClass(QuizScore);