import { DataSource, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { UserEntity } from './user.entity';
import { NotificationService } from 'src/notification/notification.service';
export declare class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
    constructor(dataSource: DataSource);
    notificationService: NotificationService;
    date: Date;
    listenTo(): typeof UserEntity;
    beforeInsert(event: InsertEvent<UserEntity>): void;
}
