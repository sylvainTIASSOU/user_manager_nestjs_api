import { DeleteResult, UpdateResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class UserService {
    private eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    private readonly userRepsitory;
    getId(firstName: string): Promise<number>;
    getAll(): Promise<UserEntity[]>;
    createUser(newUser: UserEntity): Observable<UserEntity>;
    updateUser(id: number, user: UserEntity): Observable<UpdateResult>;
    deleteUser(id: number): Observable<DeleteResult>;
}
