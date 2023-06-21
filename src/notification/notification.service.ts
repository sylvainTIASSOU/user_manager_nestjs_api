import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationEntity } from './notification.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotificationDTO } from './notification.dto';
import { Observable, from } from 'rxjs';

@Injectable()
export class NotificationService {
  private eventEmitter: EventEmitter2;
  @InjectRepository(NotificationEntity)
  private readonly notificationRepository: Repository<NotificationEntity>;

  //methode to get all user
  public getAll() {
    return this.notificationRepository.find();
  }

  //methode to create user
  // eslint-disable-next-line prettier/prettier
  public createNotification(newNotif: NotificationEntity): Observable<NotificationEntity> {
    //this.eventEmitter.emit('user.save', newNotif);
    return from(this.notificationRepository.save(newNotif));
  }

  //methode to update
  updateUser(
    idNotif: number,
    notif: NotificationEntity,
  ): Observable<UpdateResult> {
    //this.eventEmitter.emit('user.updated', notif);
    return from(this.notificationRepository.update(idNotif, notif));
  }
}
