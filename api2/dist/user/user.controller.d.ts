import { UserService } from './user.service';
import { UserDTO } from './user.dto';
export declare class UserController {
    readonly usersService: UserService;
    constructor(usersService: UserService);
    getId(nom: string): Promise<number>;
    getAllUser(): Promise<import("./user.entity").UserEntity[]>;
    createUser(user: UserDTO): import("rxjs").Observable<import("./user.entity").UserEntity>;
    updateUser(id: number, user: UserDTO): import("rxjs").Observable<import("typeorm").UpdateResult>;
    deleteUser(id: number): import("rxjs").Observable<import("typeorm").DeleteResult>;
}
