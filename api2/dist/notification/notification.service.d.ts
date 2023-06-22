import { NotificationEntity } from './notification.entity';
import { UpdateResult } from 'typeorm';
import { Observable } from 'rxjs';
export declare class NotificationService {
    private eventEmitter;
    private readonly notificationRepository;
    getAll(): Promise<NotificationEntity[]>;
    createNotification(newNotif: NotificationEntity): Observable<NotificationEntity>;
    updateUser(idNotif: number, notif: NotificationEntity): Observable<UpdateResult>;
}
