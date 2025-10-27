// ./bridge/INotificationSender.ts
export interface INotificationSender {
    send(message: string, recipient: string): void;
    isAvailable(): boolean;
}