import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { NotificationEntity } from './notification.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationSubscriber } from './notification.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([NotificationEntity])],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationSubscriber],
})
export class NotificationModule {}
