import { NotificationEntity } from 'src/notification/notification.entity';
export declare class UserDTO {
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly age: number;
    readonly notifications: NotificationEntity[];
}
