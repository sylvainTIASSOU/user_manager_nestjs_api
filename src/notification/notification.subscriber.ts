import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { NotificationEntity } from './notification.entity';

@EventSubscriber()
export class NotificationSubscriber
  implements EntitySubscriberInterface<NotificationEntity>
{
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return NotificationEntity;
  }

  beforeInsert(event: InsertEvent<NotificationEntity>) {
    console.log(`BEFORE USER INSERTED: `, event.entity);
  }
}
