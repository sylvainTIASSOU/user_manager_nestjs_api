import { DataSource, EntitySubscriberInterface } from 'typeorm';
import { NotificationEntity } from './notification.entity';
import { NotificationService } from './notification.service';
import { UserEntity } from 'src/user/user.entity';
export declare class NotificationSubscriber implements EntitySubscriberInterface<NotificationEntity> {
    private notificationService;
    constructor(dataSource: DataSource, notificationService: NotificationService);
    date: Date;
    listenTo(): typeof UserEntity;
}
