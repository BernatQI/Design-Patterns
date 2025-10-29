import { ImageInterface } from './ImageInterface';
import { RealImage } from './RealImage';

enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

// ProtectionImageProxy: controls access based on user permissions
export class ProtectionImageProxy implements ImageInterface {
    private filename: string;
    private realImage: RealImage | null = null;
    private userRole: UserRole;

    constructor(filename: string, userRole: UserRole) {
        this.filename = filename;
        this.userRole = userRole;
        console.log(`🔒 ProtectionProxy created for: ${filename} (user: ${userRole})`);
    }

    private getRealImage(): RealImage {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        return this.realImage;
    }

    private checkAccess(): boolean {
        // Different permissions based on user role
        if (this.filename.includes("confidential") && this.userRole !== UserRole.ADMIN) {
            return false;
        }
        
        if (this.filename.includes("premium") && this.userRole === UserRole.GUEST) {
            return false;
        }
        
        return true;
    }

    display(): void {
        if (this.checkAccess()) {
            console.log(`✅ Access granted for ${this.userRole}`);
            this.getRealImage().display();
        } else {
            console.log(`❌ Access denied for ${this.userRole} to ${this.filename}`);
        }
    }

    getSize(): number {
        if (this.checkAccess()) {
            return this.getRealImage().getSize();
        } else {
            console.log(`❌ Access denied to size information`);
            return 0;
        }
    }

    getFilename(): string {
        return this.filename;
    }

    getUserRole(): UserRole {
        return this.userRole;
    }
}

export { UserRole };