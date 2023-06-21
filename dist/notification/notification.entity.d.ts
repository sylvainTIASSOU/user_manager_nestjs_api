import { UserEntity } from 'src/user/user.entity';
export declare class NotificationEntity {
    idNotif: number;
    heure: number;
    minute: number;
    mode: string;
    user: UserEntity;
}
