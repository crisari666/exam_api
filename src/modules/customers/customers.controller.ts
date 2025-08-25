import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { StartExamDto } from './dto/start-exam.dto';
import { FinishExamDto } from './dto/finish-exam.dto';
import { RestartExamDto } from './dto/restart-exam.dto';
import { Customer } from './entities/customer.entity';
import { Question } from './dto/exam-questions';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createCustomer(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.createCustomer(createCustomerDto);
  }

 

  @Get()
  async getAllCustomers(): Promise<Customer[]> {
    return this.customersService.getAllCustomers();
  }

  @Get('code/:code')
  async getCustomerByCode(
    @Param('code') code: string,
  ): Promise<Customer | null> {
    return this.customersService.getCustomerByCode(code);
  }

  @Get('code/:code/exam-start-date')
  async getCustomerExamStartDate(
    @Param('code') code: string,
  ): Promise<{ customer: Customer; examStartDate: Date | null }> {
    return this.customersService.getCustomerExamStartDate(code);
  }

  @Get('exam-questions')
  async getExamQuestions(): Promise<Question[]> {
    return this.customersService.getExamQuestions();
  }

  @Post('start-exam')
  @HttpCode(HttpStatus.OK)
  async startExam(
    @Body() startExamDto: StartExamDto,
  ): Promise<{ customer: Customer; examStarted: boolean }> {
    return this.customersService.startExam(startExamDto.customerCode);
  }

  @Post('finish-exam')
  @HttpCode(HttpStatus.OK)
  async finishExam(@Body() finishExamDto: FinishExamDto): Promise<Customer> {
    return this.customersService.finishExam(finishExamDto);
  }

  @Post('restart-exam')
  @HttpCode(HttpStatus.OK)
  async restartExam(@Body() restartExamDto: RestartExamDto): Promise<Customer> {
    return this.customersService.restartExam(restartExamDto);
  }

  @Put(':id')
  async updateCustomer(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.updateCustomer(id, updateCustomerDto);
  }

  @Get(':id')
  async getCustomerById(@Param('id') id: string): Promise<Customer> {
    return this.customersService.getCustomerById(id);
  }
}
