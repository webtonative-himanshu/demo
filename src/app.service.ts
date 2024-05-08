import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import slots from './slots.json';
import pdfdata from './pdfs.json';

const MAX = 10;
let hits = 0;
const SUCCESS_RATE = 90; // Success rate in percentage

@Injectable()
export class AppService {
  getDays() {
    return Object.keys(slots);
  }

  getSlots(day: string) {
    hits++;
    if (hits > MAX) {
      hits = 0;
    }
    const percentage = (hits / MAX) * 100;
    if (percentage >= SUCCESS_RATE) {
      throw new BadRequestException();
    }
    return slots[day];
  }

  getPdf({ type, userId }: Record<string, string>) {
    const pdf = pdfdata.find((item) => {
      if (!type && !userId) return true;
      if (!userId) return true;
      return userId === item.userId;
    });

    if (!pdf) {
      throw new NotFoundException();
    }

    return pdf;
  }
}
