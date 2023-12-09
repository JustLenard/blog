import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('image/:imageName')
  getImageUrl(@Param('imageName') imageName: string) {
    return this.appService.getImageUrl(imageName);
  }
}
