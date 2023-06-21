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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notification_entity_1 = require("./notification.entity");
const typeorm_2 = require("typeorm");
const rxjs_1 = require("rxjs");
let NotificationService = exports.NotificationService = class NotificationService {
    getAll() {
        return this.notificationRepository.find();
    }
    createNotification(newNotif) {
        return (0, rxjs_1.from)(this.notificationRepository.save(newNotif));
    }
    updateUser(idNotif, notif) {
        return (0, rxjs_1.from)(this.notificationRepository.update(idNotif, notif));
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(notification_entity_1.NotificationEntity),
    __metadata("design:type", typeorm_2.Repository)
], NotificationService.prototype, "notificationRepository", void 0);
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)()
], NotificationService);
//# sourceMappingURL=notification.service.js.map