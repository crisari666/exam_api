import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema({ timestamps: true })
export class Customer {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true })
  lastName: string;

  @Prop({ required: true, unique: true, trim: true })
  phone: string;

  @Prop({ required: true, unique: true, trim: true, lowercase: true })
  email: string;

  @Prop({ required: true, unique: true, trim: true })
  code: string;

  @Prop({ type: Date })
  examStartDate?: Date;

  @Prop({ type: Date })
  examFinishDate?: Date;

  @Prop({ type: Number, min: 0, max: 100 })
  examPercentage?: number;

  @Prop({ type: Object })
  examQuestionResults?: Record<string, boolean>;

  @Prop({ type: Number, min: 0 })
  examTotalScore?: number;

  @Prop({ type: Number, min: 0 })
  examTotalPoints?: number;

  @Prop({ type: Boolean })
  examPassed?: boolean;

  @Prop({ type: Boolean, default: false })
  isExamCompleted: boolean;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
