import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findById(id);
  }

  @Post()
  createCar(@Body() payload: any) {
    return this.carsService.create(payload);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: number, @Body() payload: any) {
    return this.carsService.update(id, payload);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: number) {
    return this.carsService.delete(id);
  }
}
