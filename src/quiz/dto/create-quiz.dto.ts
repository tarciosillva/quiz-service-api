import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizDto {
    @ApiProperty({
        description: 'The quiz title',
    })
    quizTitle: string;

    @ApiProperty({
        description: 'The score quiz session',
    })
    score: string;
}
