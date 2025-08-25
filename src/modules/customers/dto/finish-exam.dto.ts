import { IsString, IsNumber, IsBoolean, IsObject, IsDateString, Min, Max } from 'class-validator';

export class FinishExamDto {
  @IsString()
  customerCode: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  percentage: number;

  @IsObject()
  questionResults: Record<string, boolean>;

  @IsNumber()
  @Min(0)
  totalScore: number;

  @IsNumber()
  @Min(0)
  totalPoints: number;

  @IsBoolean()
  passed: boolean;

  @IsDateString()
  timestamp: string;
}
