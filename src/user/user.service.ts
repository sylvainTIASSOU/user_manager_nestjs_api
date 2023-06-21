import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserInterface } from './user.interface';
import { UserDTO } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class UserService {
  private eventEmitter: EventEmitter2;
  @InjectRepository(UserEntity)
  private readonly userRepsitory: Repository<UserEntity>;

  //methode to get all user
  public getAll() {
    return this.userRepsitory.find();
  }

  //methode to create user
  public createUser(newUser: UserEntity): Observable<UserEntity> {
    //this.eventEmitter.emit('user.save', newUser);
    return from(this.userRepsitory.save(newUser));
  }

  //methode to update
  updateUser(id: number, user: UserEntity): Observable<UpdateResult> {
    //this.eventEmitter.emit('user.updated', user);
    return from(this.userRepsitory.update(id, user));
  }

  //methode to remove
  deleteUser(id: number): Observable<DeleteResult> {
    const user = this.userRepsitory.findOneBy({ id });
    //this.eventEmitter.emit('user.deleted', user);
    return from(this.userRepsitory.delete(id));
  }
}
