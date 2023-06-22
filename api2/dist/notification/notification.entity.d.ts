import { UserEntity } from 'src/user/user.entity';
export declare class NotificationEntity {
    idNotif: number;
    minute: number;
    hour: number;
    message: string;
    user: UserEntity;
}
