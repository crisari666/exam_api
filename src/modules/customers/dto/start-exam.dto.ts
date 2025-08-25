import { IsString, IsNotEmpty, Length } from 'class-validator';

export class StartExamDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  customerCode: string;
}
