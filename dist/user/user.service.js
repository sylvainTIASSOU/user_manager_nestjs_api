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
let UserService = exports.UserService = class UserService {
    getAll() {
        return this.userRepsitory.find();
    }
    createUser(newUser) {
        return (0, rxjs_1.from)(this.userRepsitory.save(newUser));
    }
    updateUser(id, user) {
        return (0, rxjs_1.from)(this.userRepsitory.update(id, user));
    }
    deleteUser(id) {
        const user = this.userRepsitory.findOneBy({ id });
        return (0, rxjs_1.from)(this.userRepsitory.delete(id));
    }
};
__decorate([
    (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity),
    __metadata("design:type", typeorm_1.Repository)
], UserService.prototype, "userRepsitory", void 0);
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map