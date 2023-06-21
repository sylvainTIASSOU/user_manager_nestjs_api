import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { NotificationService } from 'src/notification/notification.service';
import { NotificationDTO } from 'src/notification/notification.dto';
import { NotificationEntity } from 'src/notification/notification.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }
  notificationService = new NotificationService();
  date = new Date();

  listenTo() {
    return UserEntity;
  }

  beforeInsert(event: InsertEvent<UserEntity>) {
    console.log(`BEFORE USER INSERTED: `, event.entity);
    const notif: NotificationEntity = {
      heure: this.date.getHours(),
      minute: this.date.getMinutes(),
      mode: 'create',
      user: event.entity,
      idNotif: null,
    };
    //this.notificationService.createNotification(notif);
  }
}
