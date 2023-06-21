import { NotificationEntity } from 'src/notification/notification.entity';
export declare class UserEntity {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    notifications: NotificationEntity[];
}
