"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const event_emitter_1 = require("@nestjs/event-emitter");
let UserService = exports.UserService = class UserService {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }
    async getId(firstName) {
        const resultat = await this.userRepsitory.find({
            where: {
                firstName,
            },
            select: ['id'],
        });
        if (resultat.length > 0) {
            return resultat[0].id;
        }
        return null;
    }
    getAll() {
        return this.userRepsitory.find({ order: { id: 'DESC' } });
    }
    createUser(newUser) {
        this.eventEmitter.emit('user.save', newUser);
        return (0, rxjs_1.from)(this.userRepsitory.save(newUser));
    }
    updateUser(id, user) {
        this.eventEmitter.emit('user.update', user);
        return (0, rxjs_1.from)(this.userRepsitory.update(id, user));
    }
    deleteUser(id) {
        const user = this.userRepsitory.findOneBy({ id });
        this.eventEmitter.emit('user.delete', user);
        return (0, rxjs_1.from)(this.userRepsitory.delete(id));
    }
};
__decorate([
    (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserService.prototype, "userRepsitory", void 0);
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2])
], UserService);
//# sourceMappingURL=user.service.js.map