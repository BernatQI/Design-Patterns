// ./bridge/Main.ts
import { EmailSender } from './EmailSender';
import { SMSSender } from './SMSSender';
import { SlackSender } from './SlackSender';
import { SimpleNotification } from './SimpleNotification';
import { UrgentNotification } from './UrgentNotification';
import { MarketingNotification } from './MarketingNotification';

function main(): void {
    console.log("=== 🌉 BRIDGE Pattern - Notification System ===\n");

    // Create different implementations (senders)
    const emailSender = new EmailSender("smtp.company.com");
    const smsSender = new SMSSender("AWS SNS");
    const slackSender = new SlackSender();

    console.log("\n1️⃣ Simple Notification through different channels:");
    console.log("=".repeat(60));

    // Same abstraction (SimpleNotification) with different implementations
    const simpleEmail = new SimpleNotification(emailSender, "Your order has been confirmed");
    simpleEmail.send("user@email.com");

    const simpleSMS = new SimpleNotification(smsSender, "Your order has been confirmed");
    simpleSMS.send("+1234567890");

    const simpleSlack = new SimpleNotification(slackSender, "Your order has been confirmed");
    simpleSlack.send("#orders");

    console.log("\n" + "-".repeat(70) + "\n");

    console.log("2️⃣ Urgent Notification - changing implementation:");
    console.log("=".repeat(60));

    const urgentNotification = new UrgentNotification(
        emailSender, 
        "System Down", 
        "Main server not responding. Check immediately."
    );
    
    urgentNotification.send("admin@company.com");

    // Change implementation at runtime
    console.log("\n🔄 Switching to SMS for greater immediacy...");
    urgentNotification.setSender(smsSender);
    urgentNotification.send("+1234567890");

    console.log("\n" + "-".repeat(70) + "\n");

    console.log("3️⃣ Marketing Notification through multiple channels:");
    console.log("=".repeat(60));

    const marketingNotification = new MarketingNotification(
        emailSender,
        "Black Friday 2025",
        "50% discount on all products"
    );

    // Send via email
    marketingNotification.send("customer@email.com");

    // Switch to Slack for internal teams
    marketingNotification.setSender(slackSender);
    marketingNotification.send("#marketing");

    console.log("\n4️⃣ Bridge pattern advantages:");
    console.log("=".repeat(60));
    console.log("✅ Abstraction and implementation independent");
    console.log("✅ Runtime implementation changes");
    console.log("✅ Extensibility - add new types without modifying existing ones");
    console.log("✅ Hide implementation details from client");
    console.log("✅ Follows Open/Closed principle");

    console.log("\n5️⃣ Extensibility example:");
    console.log("=".repeat(60));
    console.log("📧 New senders: PushNotification, Teams, Discord");
    console.log("📝 New types: ReminderNotification, WelcomeNotification");
    console.log("🔌 Without modifying existing code");
}

// Execute the example
main();