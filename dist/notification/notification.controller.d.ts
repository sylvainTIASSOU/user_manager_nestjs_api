import { NotificationService } from './notification.service';
import { NotificationEntity } from './notification.entity';
export declare class NotificationController {
    readonly notificationService: NotificationService;
    constructor(notificationService: NotificationService);
    getAllNotif(): Promise<NotificationEntity[]>;
    createNotif(newNotif: NotificationEntity): import("rxjs").Observable<NotificationEntity>;
}
