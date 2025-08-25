import { IsString } from 'class-validator';

export class RestartExamDto {
  @IsString()
  customerCode: string;
}
