import { Subject } from './Subject';
import { RealSubject } from './RealSubject';

// Proxy: controls access to RealSubject and can add additional behavior
export class Proxy implements Subject {
    private realSubject: RealSubject | null = null;

    // Lazy initialization - create RealSubject only when needed
    private getRealSubject(): RealSubject {
        if (this.realSubject === null) {
            console.log("Proxy: Creating RealSubject instance");
            this.realSubject = new RealSubject();
        }
        return this.realSubject;
    }

    request(): string {
        // Pre-processing
        if (this.checkAccess()) {
            const result = this.getRealSubject().request();
            this.logAccess();
            return result;
        }
        
        return "Proxy: Access denied";
    }

    private checkAccess(): boolean {
        console.log("Proxy: Checking access prior to firing a real request");
        return true; // Simplified - always allow access
    }

    private logAccess(): void {
        console.log("Proxy: Logging the time of request");
    }
}