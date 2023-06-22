import { NotificationService } from '../notification.service';
import { UserEntity } from 'src/user/user.entity';
export declare class NotificationSubscribers {
    private notificationService;
    constructor(notificationService: NotificationService);
    date: Date;
    handleUserCreateEvent(payloadUser: UserEntity): void;
    handleUserUpdateEvent(payloadUser: UserEntity): void;
    handleUserDeleteEvent(payloadUser: UserEntity): void;
}
