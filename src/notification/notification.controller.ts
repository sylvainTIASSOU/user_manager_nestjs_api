import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationDTO } from './notification.dto';
import { NotificationEntity } from './notification.entity';

@Controller('notification')
export class NotificationController {
  constructor(readonly notificationService: NotificationService) {}

  @Get()
  getAllNotif() {
    return this.notificationService.getAll();
  }

  @Post()
  createNotif(@Body() newNotif: NotificationEntity) {
    return this.notificationService.createNotification(newNotif);
  }
}
