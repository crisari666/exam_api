import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer, CustomerDocument } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { FinishExamDto } from './dto/finish-exam.dto';
import { RestartExamDto } from './dto/restart-exam.dto';
import { mockQuestions, Question } from './dto/exam-questions';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async createCustomer(
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    const createdCustomer = new this.customerModel(createCustomerDto);
    return createdCustomer.save();
  }

  async getCustomerById(id: string): Promise<Customer> {
    const customer = await this.customerModel.findById(id).exec();
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return customer;
  }

  async getCustomerByCode(code: string): Promise<Customer | null> {
    const customer = await this.customerModel.findOne({ code }).exec();
    if (!customer) {
      throw new NotFoundException(`Customer with code ${code} not found`);
    }

    // If exam is completed, return null (empty result)
    if (customer.isExamCompleted) {
      return null;
    }

    return customer;
  }

  async getAllCustomers(): Promise<Customer[]> {
    return this.customerModel.find().limit(50).exec();
  }

  async getCustomerExamStartDate(
    customerCode: string,
  ): Promise<{ customer: Customer; examStartDate: Date | null }> {
    const customer = await this.getCustomerByCode(customerCode);
    if (!customer) {
      return { customer: null, examStartDate: null };
    }
    return {
      customer,
      examStartDate: customer.examStartDate || null,
    };
  }

  async startExam(
    customerCode: string,
  ): Promise<{ customer: Customer; examStarted: boolean }> {
    const customer = await this.getCustomerByCode(customerCode);
    if (!customer) {
      throw new NotFoundException(
        `Customer with code ${customerCode} not found or exam already completed`,
      );
    }
    // Update the customer with exam start date
    const updatedCustomer = await this.customerModel
      .findByIdAndUpdate(
        (customer as any)._id,
        { examStartDate: new Date() },
        { new: true },
      )
      .exec();
    if (!updatedCustomer) {
      throw new NotFoundException(`Failed to update customer exam start date`);
    }
    return {
      customer: updatedCustomer,
      examStarted: true,
    };
  }

  async finishExam(finishExamDto: FinishExamDto): Promise<Customer> {
    const customer = await this.customerModel
      .findOne({ code: finishExamDto.customerCode })
      .exec();
    if (!customer) {
      throw new NotFoundException(
        `Customer with code ${finishExamDto.customerCode} not found`,
      );
    }

    if (customer.isExamCompleted) {
      throw new NotFoundException(
        `Exam for customer ${finishExamDto.customerCode} is already completed`,
      );
    }

    const updatedCustomer = await this.customerModel
      .findByIdAndUpdate(
        (customer as any)._id,
        {
          examFinishDate: new Date(finishExamDto.timestamp),
          examPercentage: finishExamDto.percentage,
          examQuestionResults: finishExamDto.questionResults,
          examTotalScore: finishExamDto.totalScore,
          examTotalPoints: finishExamDto.totalPoints,
          examPassed: finishExamDto.passed,
          isExamCompleted: true,
        },
        { new: true },
      )
      .exec();

    if (!updatedCustomer) {
      throw new NotFoundException(`Failed to update customer exam results`);
    }

    return updatedCustomer;
  }

  async restartExam(restartExamDto: RestartExamDto): Promise<Customer> {
    const customer = await this.customerModel
      .findOne({ code: restartExamDto.customerCode })
      .exec();
    if (!customer) {
      throw new NotFoundException(
        `Customer with code ${restartExamDto.customerCode} not found`,
      );
    }

    if (!customer.isExamCompleted) {
      throw new NotFoundException(
        `Exam for customer ${restartExamDto.customerCode} is not completed yet`,
      );
    }

    const updatedCustomer = await this.customerModel
      .findByIdAndUpdate(
        (customer as any)._id,
        {
          examStartDate: null,
          examFinishDate: null,
          examPercentage: null,
          examQuestionResults: null,
          examTotalScore: null,
          examTotalPoints: null,
          examPassed: null,
          isExamCompleted: false,
        },
        { new: true },
      )
      .exec();

    if (!updatedCustomer) {
      throw new NotFoundException(`Failed to restart customer exam`);
    }

    return updatedCustomer;
  }

  async updateCustomer(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    const updatedCustomer = await this.customerModel
      .findByIdAndUpdate(id, updateCustomerDto, { new: true })
      .exec();
    if (!updatedCustomer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return updatedCustomer;
  }

  async getExamQuestions(): Promise<Question[]> {
    return mockQuestions;
  }
}
