import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('slots')
  getSlots() {
    return this.appService.getSlots();
  }

  @Get('pdf')
  getPdf(@Query() query: Record<string, string>) {
    const pdf = this.appService.getPdf(query);
    return {
      file: pdf,
    };
  }
}
