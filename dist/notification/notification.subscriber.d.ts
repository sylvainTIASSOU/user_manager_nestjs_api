import { DataSource, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { NotificationEntity } from './notification.entity';
export declare class NotificationSubscriber implements EntitySubscriberInterface<NotificationEntity> {
    constructor(dataSource: DataSource);
    listenTo(): typeof NotificationEntity;
    beforeInsert(event: InsertEvent<NotificationEntity>): void;
}
