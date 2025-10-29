import { Subject } from './Subject';

// RealSubject: the actual object that proxy represents
export class RealSubject implements Subject {
    request(): string {
        return "RealSubject: Handling request.";
    }
}