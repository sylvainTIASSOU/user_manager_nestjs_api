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
exports.NotificationSubscribers = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("../notification.service");
const event_emitter_1 = require("@nestjs/event-emitter");
const user_entity_1 = require("../../user/user.entity");
let NotificationSubscribers = exports.NotificationSubscribers = class NotificationSubscribers {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.date = new Date();
    }
    handleUserCreateEvent(payloadUser) {
        console.log('utilisateur cree: ', payloadUser);
        const notif = {
            hour: this.date.getHours(),
            minute: this.date.getMinutes(),
            message: payloadUser.lastName + '   created',
            user: payloadUser,
            idNotif: null,
        };
        this.notificationService.createNotification(notif);
    }
    handleUserUpdateEvent(payloadUser) {
        console.log('utilisateur update: ', payloadUser);
        const notif = {
            hour: this.date.getHours(),
            minute: this.date.getMinutes(),
            message: payloadUser.lastName + '  updated',
            user: payloadUser,
            idNotif: null,
        };
        this.notificationService.createNotification(notif);
    }
    handleUserDeleteEvent(payloadUser) {
        console.log('utilisateur delete: ', payloadUser);
        const notif = {
            hour: this.date.getHours(),
            minute: this.date.getMinutes(),
            message: payloadUser.lastName + '  deleted',
            user: payloadUser,
            idNotif: null,
        };
        this.notificationService.createNotification(notif);
    }
};
__decorate([
    (0, event_emitter_1.OnEvent)('user.save'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], NotificationSubscribers.prototype, "handleUserCreateEvent", null);
__decorate([
    (0, event_emitter_1.OnEvent)('user.update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], NotificationSubscribers.prototype, "handleUserUpdateEvent", null);
__decorate([
    (0, event_emitter_1.OnEvent)('user.delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], NotificationSubscribers.prototype, "handleUserDeleteEvent", null);
exports.NotificationSubscribers = NotificationSubscribers = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationSubscribers);
//# sourceMappingURL=notification.subscriber.js.map