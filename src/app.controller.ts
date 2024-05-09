import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('days')
  getDays() {
    const days = this.appService.getDays();
    return {
      days: days.map((day) => ({ day })),
    };
  }

  @Get('slots')
  getSlots(@Query('day') day: string) {
    const slots = this.appService.getSlots(day);
    return {
      slots,
    };
  }

  @HttpCode(200)
  @Get('book')
  book(@Query() body: Record<string, string>) {
    return {
      message: `Slot for ${body.day} , ${body.time} is booked successfully`,
    };
  }

  @Post('book2')
  boo2k(@Body() body: Record<string, string>) {
    return {
      message: `Slot for ${body.day} , ${body.time} is booked successfully`,
    };
  }

  @Get('pdf')
  getPdf(@Query() query: Record<string, string>) {
    const pdf = this.appService.getPdf(query);
    return pdf;
  }
}
