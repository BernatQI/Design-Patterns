import { Subject } from './Subject';
import { RealSubject } from './RealSubject';
import { Proxy } from './Proxy';
import { ImageInterface } from './ImageInterface';
import { RealImage } from './RealImage';
import { VirtualImageProxy } from './VirtualImageProxy';
import { CachingImageProxy } from './CachingImageProxy';
import { ProtectionImageProxy, UserRole } from './ProtectionImageProxy';

// Demonstrates basic proxy functionality
function demonstrateBasicProxy(): void {
    console.log("🎯 BASIC PROXY PATTERN");
    console.log("=".repeat(50));
    
    console.log("\n1. Direct access to RealSubject:");
    const realSubject = new RealSubject();
    console.log(realSubject.request());
    
    console.log("\n2. Access through Proxy:");
    const proxy = new Proxy();
    console.log(proxy.request());
}

// Demonstrates virtual proxy (lazy loading)
function demonstrateVirtualProxy(): void {
    console.log("\n\n📄 VIRTUAL PROXY - Lazy Loading");
    console.log("=".repeat(50));
    
    console.log("\n3. Creating virtual proxies (no loading yet):");
    const image1 = new VirtualImageProxy("photo1.jpg");
    const image2 = new VirtualImageProxy("photo2.jpg");
    const image3 = new VirtualImageProxy("photo3.jpg");
    
    console.log("\n4. Getting metadata (still no loading):");
    console.log(`Image 1 filename: ${image1.getFilename()}`);
    console.log(`Image 1 estimated size: ${image1.getSize()}KB`);
    
    console.log("\n5. First display triggers loading:");
    image1.display();
    
    console.log("\n6. Second display uses loaded image:");
    image1.display();
    
    console.log("\n7. Getting actual size after loading:");
    console.log(`Image 1 actual size: ${image1.getSize()}KB`);
}

// Demonstrates caching proxy
function demonstrateCachingProxy(): void {
    console.log("\n\n🗄️ CACHING PROXY - Performance Optimization");
    console.log("=".repeat(50));
    
    const cachedImage = new CachingImageProxy("large_image.jpg");
    
    console.log("\n8. First operations (will cache results):");
    console.log(`Size: ${cachedImage.getSize()}KB`);
    cachedImage.display();
    
    console.log("\n9. Repeated operations (uses cache):");
    console.log(`Size: ${cachedImage.getSize()}KB`);
    cachedImage.display();
    cachedImage.display();
    
    console.log("\n10. Cache statistics:");
    const stats = cachedImage.getCacheStats();
    console.log(`Total displays: ${stats.displays}`);
    console.log(`Size cached: ${stats.sizeCached}`);
}

// Demonstrates protection proxy
function demonstrateProtectionProxy(): void {
    console.log("\n\n🔒 PROTECTION PROXY - Access Control");
    console.log("=".repeat(50));
    
    const publicImage = new ProtectionImageProxy("public_photo.jpg", UserRole.GUEST);
    const premiumImage = new ProtectionImageProxy("premium_content.jpg", UserRole.GUEST);
    const confidentialImage = new ProtectionImageProxy("confidential_data.jpg", UserRole.USER);
    
    console.log("\n11. Guest user access:");
    publicImage.display();      // Should work
    premiumImage.display();     // Should be denied
    
    console.log("\n12. Admin user access:");
    const adminImage = new ProtectionImageProxy("confidential_data.jpg", UserRole.ADMIN);
    adminImage.display();       // Should work
    
    console.log("\n13. Size access control:");
    console.log(`Public image size: ${publicImage.getSize()}KB`);
    console.log(`Confidential image size: ${confidentialImage.getSize()}KB`);
}

// Demonstrates performance comparison
function demonstratePerformanceComparison(): void {
    console.log("\n\n⚡ PERFORMANCE COMPARISON");
    console.log("=".repeat(50));
    
    console.log("\n14. Without Proxy (immediate loading):");
    const start1 = Date.now();
    const directImage1 = new RealImage("direct1.jpg");
    const directImage2 = new RealImage("direct2.jpg");
    const directImage3 = new RealImage("direct3.jpg");
    const time1 = Date.now() - start1;
    console.log(`⏱️ Time to create 3 images directly: ${time1}ms`);
    
    console.log("\n15. With Virtual Proxy (lazy loading):");
    const start2 = Date.now();
    const proxyImage1 = new VirtualImageProxy("proxy1.jpg");
    const proxyImage2 = new VirtualImageProxy("proxy2.jpg");
    const proxyImage3 = new VirtualImageProxy("proxy3.jpg");
    const time2 = Date.now() - start2;
    console.log(`⏱️ Time to create 3 proxy images: ${time2}ms`);
    
    console.log(`\n💡 Proxy creation is ${Math.round(time1/time2)}x faster!`);
    
    console.log("\n16. Loading only when needed:");
    console.log("Displaying only first image...");
    proxyImage1.display();
    console.log("Other images remain unloaded until needed!");
}

// Run all demonstrations
demonstrateBasicProxy();
demonstrateVirtualProxy();
demonstrateCachingProxy();
demonstrateProtectionProxy();
demonstratePerformanceComparison();