import { DeleteResult, UpdateResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { Observable } from 'rxjs';
export declare class UserService {
    private eventEmitter;
    private readonly userRepsitory;
    getAll(): Promise<UserEntity[]>;
    createUser(newUser: UserEntity): Observable<UserEntity>;
    updateUser(id: number, user: UserEntity): Observable<UpdateResult>;
    deleteUser(id: number): Observable<DeleteResult>;
}
